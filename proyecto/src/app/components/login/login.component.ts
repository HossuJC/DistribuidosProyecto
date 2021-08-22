import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/interfaces/usuario.interface';

const _apiUrl = environment.apiURL;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])
    ),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private login: LoginService,
    private http: HttpClient,
    private router: Router
  ) {}

  onLogin() {
    const { email, password } = this.loginForm.value;
    const payload = {
      correo: email,
      contrasena: password,
    };
    //console.log(payload);
    try {
      this.http.post(`${_apiUrl}/auth/login`, payload).subscribe((r) => {
        console.log(r);
        const respuesta = JSON.parse(JSON.stringify(r));
        localStorage.setItem('token', respuesta.token);
        localStorage.setItem('rol', respuesta.usuario.rol);
        localStorage.setItem('id_user', respuesta.usuario.id);
        localStorage.setItem('activo', respuesta.usuario.activo);
        if (respuesta.usuario.activo == 0) {
          this.router.navigate(['/bloqueado']);
        } else if (respuesta.usuario.rol == 1) {
          this.router.navigate(['/homelector']);
        } else if (respuesta.usuario.rol != 1) {
          this.router.navigate(['/homeescritor']);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('activo') == '0'
    ) {
      this.router.navigate(['bloqueado']);
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('rol') == '1'
    ) {
      this.router.navigate(['homelector']);
    } else if (localStorage.getItem('token') != null) {
      this.router.navigate(['homeescritor']);
    } else {
      $(function () {
        const step2 = $('.step2');
        step2.hide();
        $('.input input')
          .focus(function () {
            $(this)
              .parent('.input')
              .each(function () {
                $('label', this).css({
                  'line-height': '18px',
                  'font-size': '18px',
                  'font-weight': '100',
                  top: '0px',
                });
                $('.spin', this).css({
                  width: '100%',
                });
              });
          })
          .blur(function () {
            $('.spin').css({
              width: '0px',
            });
            if ($(this).val() == '') {
              $(this)
                .parent('.input')
                .each(function () {
                  $('label', this).css({
                    'line-height': '60px',
                    'font-size': '24px',
                    'font-weight': '300',
                    top: '10px',
                  });
                });
            }
          });

        let boton: any;
        boton = $('.button');
        boton.click(function (e: any) {
          const pX = e.pageX;
          const pY = e.pageY;
          const oX = parseInt(boton.offset().left);
          const oY = parseInt(boton.offset().top);

          boton.append(
            '<span class="click-efect x-' +
              oX +
              ' y-' +
              oY +
              '" style="margin-left:' +
              (pX - oX) +
              'px;margin-top:' +
              (pY - oY) +
              'px;"></span>'
          );
          $('.x-' + oX + '.y-' + oY + '').animate(
            {
              width: '500px',
              height: '500px',
              top: '-250px',
              left: '-250px',
            },
            600
          );
          $('button', boton).addClass('active');
        });

        $('.alt-2').click(function () {
          if (!$(this).hasClass('material-button')) {
            $('.shape').css({
              width: '100%',
              height: '100%',
              transform: 'rotate(0deg)',
            });

            setTimeout(function () {
              $('.overbox').css({
                overflow: 'initial',
              });
            }, 600);

            $(this).animate(
              {
                width: '140px',
                height: '140px',
              },
              500,
              function () {
                $('.box').removeClass('back');

                $(this).removeClass('active');
              }
            );

            $('.overbox .title').fadeOut(300);
            $('.overbox .input').fadeOut(300);
            $('.overbox .button').fadeOut(300);

            $('.alt-2').addClass('material-buton');
          }
        });

        $('.material-button').click(function () {
          if ($(this).hasClass('material-button')) {
            setTimeout(function () {
              $('.overbox').css({
                overflow: 'hidden',
              });
              $('.box').addClass('back');
            }, 200);
            $(this).addClass('active').animate({
              width: '700px',
              height: '700px',
            });

            setTimeout(function () {
              $('.shape').css({
                width: '50%',
                height: '50%',
                transform: 'rotate(45deg)',
              });

              $('.overbox .title').fadeIn(300);
              $('.overbox .input').fadeIn(300);
              $('.overbox .button').fadeIn(300);
            }, 700);

            $(this).removeClass('material-button');
          }

          if ($('.alt-2').hasClass('material-buton')) {
            $('.alt-2').removeClass('material-buton');
            $('.alt-2').addClass('material-button');
          }
        });
        const step1 = $('.step1');
        const siguiente = $('.button.ov1');
        siguiente.on('click', () => {
          step1.hide();
          step2.show();
        });
      });
    }
  }
}
