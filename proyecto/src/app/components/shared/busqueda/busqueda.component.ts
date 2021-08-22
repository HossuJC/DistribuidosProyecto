import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
//import {Router} from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers: [LibroService],
})
export class BusquedaComponent implements OnInit {
  // posts: any;
  texto: string = '';
  libros: any[] = [];
  bib: any[] = [];
  constructor(
    private location: Location,
    private formbuilder: FormBuilder,
    private librosS: LibroService,
    private userS: UsuarioService,
    private bibS: BibliotecaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(({ texto }) => {
      this.texto = texto;
    });
  }

  filterPost = '';

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('activo') == '0') {
      this.router.navigate(['bloqueado']);
    } else {
      if (this.texto != undefined) {
        this.filterPost = this.texto;
      }
      this.librosS.getAllObras().subscribe((res: any) => {
        if (res) {
          this.libros = res;
          console.log(res);
        }
      });
      this.bibS.getBibliotecas().subscribe((res: any) => {
        if (res) {
          this.bib = res;
        }
      });
    }
  }

  guardarBib(id: number): void {
    this.bibS.createBiblioteca(id).subscribe((res) => {
      console.log(res);
    });
    window.location.reload();
  }

  isInBib(id: number) {
    var bool: Boolean = false;
    this.bib.forEach((element) => {
      if (element.obraId == id) {
        bool = true;
      }
    });
    return bool;
  }
}
