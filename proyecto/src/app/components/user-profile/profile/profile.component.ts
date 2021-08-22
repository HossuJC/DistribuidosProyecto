import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  librosBib: number = 0;
  autoresBib: number = 0;
  librosEscritos: number = 0;
  coleccion: any[] = [];
  escritos: any[] = [];
  autores: any[] = [];
  usuario: any;

  constructor(
    private router: Router,
    private userS: UsuarioService,
    private bibS: BibliotecaService,
    private librosS: LibroService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('activo') == '0') {
      this.router.navigate(['bloqueado']);
    } else {
      this.getUserInfo();
      this.bibS.getBibliotecas().subscribe((res: any) => {
        if (res) {
          this.coleccion = res;
          this.librosBib = this.coleccion.length;
          this.contarAutores();
        }
      });
      this.librosS
        .getLibroByEscritor(Number(localStorage.getItem('id_user')))
        .subscribe((res: any) => {
          if (res) {
            this.escritos = res;
            this.librosEscritos = this.escritos.length;
          }
        });
    }
  }

  showAboutMe() {
    $('#tab1').removeClass('not-display');
    $('#tab2').addClass('not-display');
    $('#tab3').addClass('not-display');
    $('#nav-op-1').addClass('active');
    $('#nav-op-2').removeClass('active');
    $('#nav-op-3').removeClass('active');
  }

  showPersonalInf() {
    $('#tab1').addClass('not-display');
    $('#tab2').removeClass('not-display');
    $('#tab3').addClass('not-display');
    $('#nav-op-1').removeClass('active');
    $('#nav-op-2').addClass('active');
    $('#nav-op-3').removeClass('active');
  }

  showSubs() {
    $('#tab1').addClass('not-display');
    $('#tab2').addClass('not-display');
    $('#tab3').removeClass('not-display');
    $('#nav-op-1').removeClass('active');
    $('#nav-op-2').removeClass('active');
    $('#nav-op-3').addClass('active');
  }

  getUserInfo() {
    this.userS.getUserInfo().subscribe((data) => {
      this.usuario = data;
    });
  }

  contarAutores() {
    this.coleccion.forEach((valor) => {
      if (!this.autores.includes(valor.obra.usuario.id)) {
        this.autores.push(valor.obra.usuario.id);
      }
      this.autoresBib = this.autores.length;
    });
  }
}
