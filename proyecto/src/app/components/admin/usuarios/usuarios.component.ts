import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private router: Router, private userS: UsuarioService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    } else if (localStorage.getItem('activo') == '0') {
      this.router.navigate(['bloqueado']);
    } else {
      this.getAllUsers();
    }
  }

  getAllUsers() {
    this.userS.getAllUsers().subscribe((data: any[]) => {
      this.usuarios = [];
      this.usuarios = data;
      for (var x = 0; x < data.length; x++) {
        console.log(data[x]);
      }
    });
  }

  cambiarActivo(user: any, event: any) {
    var userid: number = user.id;

    const activar = { activo: '1' };
    const desactivar = { activo: '0' };
    var val = event.target.value;
    if (localStorage.getItem('id_user') == user.id || user.rol == '3') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡No puedes desactivar tu usuario ni otros administradores!',
      });
      event.target.value = 'on';
    } else {
      Swal.fire({
        title:
          val == 'off'
            ? '¿Quieres desactivar este usuario?'
            : '¿Quieres activar este usuario?',
        showDenyButton: true,
        confirmButtonText: `Aceptar`,
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          if (val == 'on') {
            this.userS.updateUserById(user.id, activar).subscribe((res) => {
              console.log(res);
            });
            Swal.fire('Se activo con exito', '', 'success');
            event.target.value = 'on';
          } else {
            this.userS.updateUserById(user.id, desactivar).subscribe((res) => {
              console.log(res);
            });
            Swal.fire('Se desactivo con exito', '', 'success');
            event.target.value = 'off';
          }
        } else if (result.isDenied) {
          Swal.fire('Se cancelo la accion', '', 'info');
          event.target.value = val == 'off' ? 'on' : 'off';
        }
      });
    }
  }
}
