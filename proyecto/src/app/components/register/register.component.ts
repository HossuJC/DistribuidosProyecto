import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RegistrationValidator } from './registration_validator';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const _apiUrl = environment.apiURL;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public passwordFormGroup: any;
  public personalInfoFormGroup: any;
  public contactInfoFormGroup: any;
  public registerForm: any;
  public userTypeFormGroup: any;

  constructor(
    private auth: LoginService,
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.formValidator();
  }

  formValidator() {
    this.passwordFormGroup = this.formBuilder.group(
      {
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        repeatPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
      },
      { validator: RegistrationValidator.validate.bind(this) }
    );

    this.personalInfoFormGroup = new FormGroup({
      nombre: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      apellido: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      fech_nac: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
    });

    this.contactInfoFormGroup = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      telefono: new FormControl(''),
    });

    this.userTypeFormGroup = new FormGroup({
      tipoUser: new FormControl(''),
    });

    this.registerForm = new FormGroup({
      user: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      passwordFormGroup: this.passwordFormGroup,
      personalInfoFormGroup: this.personalInfoFormGroup,
      contactInfoFormGroup: this.contactInfoFormGroup,
      userTypeFormGroup: this.userTypeFormGroup,
    });
  }
  onSubmit() {
    const payload = {
      nombre_usuario: this.registerForm.value.user,
      correo: this.contactInfoFormGroup.value.email,
      contrasena: this.passwordFormGroup.value.password,
      nombre: this.personalInfoFormGroup.value.nombre,
      apellido: this.personalInfoFormGroup.value.apellido,
      fecha_nacimiento: this.personalInfoFormGroup.value.fech_nac,
    };
    try {
      this.http.post(`${_apiUrl}/auth/signup`, payload).subscribe((r) => {
        console.log(r);
        const respuesta = JSON.parse(JSON.stringify(r));
        if (respuesta.usuario.rol == 1) {
          this.router.navigate(['/login']);
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
      $(document).ready(function () {
        const base_color = 'rgb(230,230,230)';
        const active_color = '#734046';

        let child = 1;
        const length = $('section').length - 1;
        $('#prev').addClass('disabled');
        $('#submit').addClass('disabled');

        $('section').not('section:nth-of-type(1)').hide();
        $('section')
          .not('section:nth-of-type(1)')
          .css('transform', 'translateX(100px)');

        const svgWidth = length * 200 + 24;
        $('#svg_wrap').html(
          '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
            svgWidth +
            ' 24" xml:space="preserve"></svg>'
        );
        let positionX = 0;
        function makeSVG(tag: any, attrs: any) {
          const el = document.createElementNS(
            'http://www.w3.org/2000/svg',
            tag
          );
          for (const k in attrs) el.setAttribute(k, attrs[k]);
          return el;
        }

        for (let i = 0; i < length; i++) {
          positionX = 12 + i * 200;
          const rect = makeSVG('rect', {
            x: positionX,
            y: 9,
            width: 200,
            height: 6,
          });
          $('#svg_form_time').append(rect);
          // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
          var circle = makeSVG('circle', {
            cx: positionX,
            cy: 12,
            r: 12,
            width: positionX,
            height: 6,
          });
          $('#svg_form_time').append(circle);
        }

        var circle = makeSVG('circle', {
          cx: positionX + 200,
          cy: 12,
          r: 12,
          width: positionX,
          height: 6,
        });
        $('#svg_form_time').append(circle);

        $('#svg_form_time rect').css('fill', base_color);
        $('#svg_form_time circle').css('fill', base_color);
        $('circle:nth-of-type(1)').css('fill', active_color);

        $('.button').click(function () {
          $('#svg_form_time rect').css('fill', active_color);
          $('#svg_form_time circle').css('fill', active_color);
          const id = $(this).attr('id');
          if (id == 'next') {
            $('#prev').removeClass('disabled');
            if (child >= length) {
              $(this).addClass('disabled');
              $('#submit').removeClass('disabled');
            }
            if (child <= length) {
              child++;
            }
          } else if (id == 'prev') {
            $('#next').removeClass('disabled');
            $('#submit').addClass('disabled');
            if (child <= 2) {
              $(this).addClass('disabled');
            }
            if (child > 1) {
              child--;
            }
          }
          const circle_child = child + 1;
          $('#svg_form_time rect:nth-of-type(n + ' + child + ')').css(
            'fill',
            base_color
          );
          $('#svg_form_time circle:nth-of-type(n + ' + circle_child + ')').css(
            'fill',
            base_color
          );
          const currentSection = $('section:nth-of-type(' + child + ')');
          currentSection.fadeIn();
          currentSection.css('transform', 'translateX(0)');
          currentSection
            .prevAll('section')
            .css('transform', 'translateX(-100px)');
          currentSection
            .nextAll('section')
            .css('transform', 'translateX(100px)');
          $('section').not(currentSection).hide();
        });
      });

      $('.button').on('click', () => {});
    }
  }
}
