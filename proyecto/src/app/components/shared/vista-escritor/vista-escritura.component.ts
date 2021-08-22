import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SeccionService } from 'src/app/services/seccion.service';
import { Seccion } from './seccion.model';
import { LibroService } from 'src/app/services/libro.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { getConfigFileParsingDiagnostics } from 'typescript';

@Component({
  selector: 'app-vista-escritura',
  templateUrl: './vista-escritura.component.html',
  styleUrls: ['./vista-escritura.component.css'],
})
export class VistaEscrituraComponent implements OnInit {
  id: number = 0;
  index: number = 0;
  secciones: any[] = [];
  tituloCap: string = '';
  contenidoCap: string = '';
  titulolibro: string = '';
  portadaurl: string = '';
  escritor: string = '';
  tipo: string = '';

  configF: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    height: 'calc(100vh - 146px)',
    minWidth: '100%',
    placeholder: 'Empieza tu historia',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    sanitize: false,
    showToolbar: false,
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName',
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
      ],
    ],
  };
  configT: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'calc(100vh - 192px)',
    minHeight: '23rem',
    minWidth: '100%',
    placeholder: 'Empieza tu historia',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    sanitize: false,
    toolbarHiddenButtons: [
      [
        'bold',
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
      ],
    ],
  };

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private seccionS: SeccionService,
    private libroS: LibroService
  ) {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('activo') == '0') {
      this.router.navigate(['bloqueado']);
    } else {
      console.log('Este es el id ' + this.id);

      this.get_libro();

      this.tipo = localStorage.getItem('rol')
        ? String(localStorage.getItem('rol'))
        : '1';
    }
  }

  editable() {
    if (this.escritor == localStorage.getItem('id_user')) {
      return true;
    } else {
      return false;
    }
  }

  get_secciones() {
    this.seccionS.getAllSectionsByObraId(this.id).subscribe((data: any) => {
      console.log(data);
      this.secciones = data;
    });
  }

  get_libro() {
    this.libroS.getLibroById(this.id).subscribe((obra) => {
      if (obra /*&& obra.escritor == localStorage.getItem('id_user')*/) {
        this.titulolibro = obra.titulo;
        this.portadaurl = obra.portada;
        this.escritor = obra.escritor;
        console.log(obra);
        this.get_secciones();
        setTimeout(() => {
          this.contenidoCap = this.secciones[0].contenido;
          this.tituloCap = this.secciones[0].titulo;
        }, 500);
      } else {
        console.log('No se trajo info');
        this.router.navigate(['coleccion']);
      }
    });
  }

  change(i: number) {
    this.index = i;
    this.tituloCap = this.secciones[i].titulo;
    this.contenidoCap = this.secciones[i].contenido;
  }

  saveContent() {
    console.log(this.contenidoCap);
    const section = {
      titulo: this.tituloCap,
      orden: this.secciones[this.index].orden,
      contenido: this.contenidoCap,
      estado: 1,
    };
    this.seccionS
      .updateSection(section, this.secciones[this.index].id)
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.get_secciones();
        }
      });
  }

  saveTitle(titulo: any) {
    console.log(titulo);
    const section = {
      titulo: titulo,
      orden: this.secciones[this.index].orden,
      contenido: this.contenidoCap,
      estado: 1,
    };
    this.seccionS
      .updateSection(section, this.secciones[this.index].id)
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.get_secciones();
        }
      });
  }

  newSection() {
    const seccion = {
      obra: this.id,
      orden: this.secciones[this.secciones.length - 1].orden + 1,
    };
    console.log(seccion);
    this.seccionS.createSection(seccion).subscribe((data) => {
      console.log(data);
      this.get_secciones();
    });
  }

  borrarCap(index:any) {this.seccionS
    .deleteSection(this.secciones[index].id)
    .subscribe((data) => {
      console.log(data);
      if (data) {
        this.get_secciones();
      }
    });
  }

  save_libro(contenido: string, titulo: string) {
    console.log('save libro');

    const current = this.router.url;
    this.router.navigate([current]);
    this.seccionS.update_sect(this.id, titulo, contenido);
  }

  atras() {
    this.location.back();
  }
  
  atrasBib() {
    this.router.navigate(['coleccion']);
  }

  prueba() {
    const output = document.getElementById('output');
    const buttons: any = document.getElementsByClassName('tool--btn');
    for (const btn of buttons) {
      btn.addEventListener('click', () => {
        const cmd = btn.dataset['command'];
        if (cmd === 'createlink') {
          let url: string | null | undefined;
          url = prompt('Enter the link here: ', 'http://');
          if (url == null) {
            url = undefined;
          }
          document.execCommand(cmd, false, url);
        } else {
          document.execCommand(cmd, false, undefined);
        }
      });
    }
  }
}
