import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from 'src/app/services/biblioteca.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent implements OnInit {
  autoresBib: number = 0;
  coleccion: any[] = [];
  autoresId: any[] = [];
  autores: any[] = [];

  constructor(private bibS: BibliotecaService) {}

  ngOnInit(): void {
    this.bibS.getBibliotecas().subscribe((res: any) => {
    if (res) {
      this.coleccion = res;
      this.contarAutores();
    }
  });
  }

  contarAutores() {
    this.coleccion.forEach((valor) => {
      if (!this.autoresId.includes(valor.obra.usuario.id)) {
        this.autoresId.push(valor.obra.usuario.id);
        this.autores.push(valor.obra.usuario);
      }
      this.autoresBib = this.autores.length;
    });
  }

  /*getSuscriptionData(id: any) {
    this.suscribedAuthors = [
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
    ];
    this.followedAuthors = [
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
      {
        name: 'J.K. Rowling',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      },
    ];
  }*/
}
