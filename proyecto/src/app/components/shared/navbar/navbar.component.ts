import { Component, OnInit, ElementRef } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  tipo: string = '';
  usuario: any = '';

  constructor(
    public location: Location,
    private element: ElementRef,
    public router: Router,
    private userS: UsuarioService
  ) {
    this.sidebarVisible = false;
  }
  textbusqueda = '';
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.tipo = localStorage.getItem('rol')
      ? String(localStorage.getItem('rol'))
      : '1';
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.userS.getUserInfo().subscribe((res) => {
      this.usuario = res;
    });
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  limpiarStorage() {
    localStorage.clear();
  }
  onSubmit() {
    this.router.navigate(['/busqueda/' + this.textbusqueda]);
  }
}
