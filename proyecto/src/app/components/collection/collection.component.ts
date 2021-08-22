import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';
import { BibliotecaService } from 'src/app/services/biblioteca.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  coleccion: any[] = [];
  escritos: any[] = [];
  coleccionVacio: boolean = true;
  escritosVacio: boolean = true;
  tipo: string = '';
  constructor(
    private router: Router,
    private librosS: LibroService,
    private bibS: BibliotecaService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('activo') == '0') {
      this.router.navigate(['bloqueado']);
    } else {
      this.tipo = localStorage.getItem('rol')
        ? String(localStorage.getItem('rol'))
        : '1';
      this.bibS.getBibliotecas().subscribe((res: any) => {
        if (res) {
          this.coleccion = res;
          if (this.coleccion.length > 0) {
            this.coleccionVacio = false;
          }
        }
      });
      this.librosS
        .getLibroByEscritor(Number(localStorage.getItem('id_user')))
        .subscribe((res: any) => {
          if (res) {
            this.escritos = res;
            if (this.escritos.length > 0) {
              console.log(this.escritos);
              this.escritosVacio = false;
            }
          }
        });
    }
  }

  eliminarBib(id: number): void {
    this.bibS.eliminarBiblioteca(id).subscribe((res) => {
      console.log(res);
    });
    window.location.reload();
  }

  eliminarObra(id: number): void {
    this.librosS.deleteLibro(id).subscribe((res) => {
      console.log(res);
    });
    window.location.reload();
  }
}
