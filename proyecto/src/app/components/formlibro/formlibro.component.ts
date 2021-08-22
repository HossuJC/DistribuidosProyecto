import { SeccionService } from './../../services/seccion.service';
import { Component, OnInit } from '@angular/core';
import { Genero } from './genero.model';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro.service';
import { Router } from '@angular/router';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-formlibro',
  templateUrl: './formlibro.component.html',
  styleUrls: ['./formlibro.component.css'],
  providers: [LibroService],
})
export class FormlibroComponent implements OnInit {
  libroForm: any;
  id: any;
  generos: Genero[] = [];
  clasificacion = ['Todo Público', '+18'];
  idioma = ['Español', 'Ingles', 'Frances'];
  url = '../../assets/img/metamorfosisPortada.jpg';

  constructor(
    private location: Location,
    private formbuilder: FormBuilder,
    private libroService: LibroService,
    private router: Router,
    private seccionS: SeccionService,
    private genS: GeneroService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('activo') == '0') {
      this.router.navigate(['bloqueado']);
    } else if (localStorage.getItem('rol') == '1') {
      this.router.navigate(['homelector']);
    } else {
      this.getGeneros();

      this.libroForm = this.formbuilder.group({
        titulo: ['', Validators.required],
        sinopsis: ['', Validators.required],
        genero: ['', Validators.required],
        clasificacion: ['', Validators.required],
        exclusivo: ['', Validators.required],
      });
    }
  }

  onSubmit(data: any) {
    console.log(data);
    const libro = {
      titulo: data.titulo,
      sinopsis: data.sinopsis,
      /*'genero': data.genero,*/
      adulto: data.clasificacion === 'Todo Público' ? 0 : 1,
      escritor: Number(localStorage.getItem('id_user')),
      exclusivo: data.exclusivo === true ? 0 : 1,
      anio_publicacion: new Date().getFullYear(),
    };
    this.libroService.sendLibro(libro).subscribe((data) => {
      if (data) {
        const res = JSON.parse(JSON.stringify(data));
        this.id = data.id;
        console.log(res.id);
        console.log(data);
        const seccion = {
          obra: data.id,
          orden: 0,
        };
        console.log(seccion);
        this.seccionS
          .createSection(seccion)
          .subscribe((data) => console.log(data));
        this.router.navigate(['/vistaescritura', this.id]);
      }
    });

    // console.log(this.id);
    // if(this.id!=""){
    //   this.seccion.send_seccion("Borrador",Number(this.id),"","1");
    // }

    this.libroForm.reset();
  }

  atras() {
    this.location.back();
  }

  getGeneros() {
    this.genS.getAllGenres().subscribe((data: Genero[]) => {
      this.generos = data;
      console.log(data);
    });
  }

  checkError = (controlName: string, errorName: string) => {
    return this.libroForm.controls[controlName].hasError(errorName);
  };
}
