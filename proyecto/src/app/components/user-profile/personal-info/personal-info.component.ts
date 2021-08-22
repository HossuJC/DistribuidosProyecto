import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  datos: any;
  pass: any;
  user: any;

  constructor(
    private userS: UsuarioService,
    //private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userS.getUserInfo().subscribe((res) => {
      this.user = res;
    });
    /*this.datos = this.formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre_usuario: ['', Validators.required],
      correo: ['', Validators.required],
      fecha_nacimeinto: ['', Validators.required],
    });
    this.pass = this.pass.group({
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });*/
  }

  onSubmit() {
    const userData = {
      nombre: $('#nombre').val(),
      apellido: $('#apellido').val(),
      nombre_usuario: $('#nombre_usuario').val(),
      correo: $('#correo').val(),
      fecha_nacimiento: $('#fecha_nacimiento').val(),
      pais: $('#pais').val(),
      foto: $('#foto').val(),
    };
    this.userS.updateUserInfo(userData).subscribe((res) => {
      if (res == 1) {
        window.location.reload();
      }
    });
  }

  onSubmitPass() {
    if ($('#password1').val() == $('#password2').val()) {
      const userData = {
        contrasena: $('#password1').val(),
      };
      this.userS.updateUserPass(userData).subscribe((res) => {
        if (res == 1) {
          window.location.reload();
        }
      });
    }
  }
}
