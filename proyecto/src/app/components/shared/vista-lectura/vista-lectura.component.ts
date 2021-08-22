import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista-lectura',
  templateUrl: './vista-lectura.component.html',
  styleUrls: ['./vista-lectura.component.css'],
})
export class VistaLecturaComponent implements OnInit {
  @Input() titulo: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.titulo = 'Titulo de prueba';
    console.log('Este es el id' + this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('activo') == '0') {
      this.router.navigate(['bloqueado']);
    } else {
      console.log('Este es el id' + this.route.snapshot.paramMap.get('id'));
    }
  }
}
