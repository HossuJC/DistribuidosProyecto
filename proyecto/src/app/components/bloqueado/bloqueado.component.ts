import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloqueado',
  templateUrl: './bloqueado.component.html',
  styleUrls: ['./bloqueado.component.css'],
})
export class BloqueadoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('activo') == '1' &&
      localStorage.getItem('rol') == '1'
    ) {
      this.router.navigate(['homelector']);
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('activo') == '1'
    ) {
      this.router.navigate(['homeescritor']);
    }
  }

  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
