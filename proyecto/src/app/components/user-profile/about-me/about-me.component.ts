import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  bio: any;
  registerDate: string = '';
  tipoUser: any;

  constructor(private userS: UsuarioService) {}

  ngOnInit(): void {
    this.userS.getUserInfo().subscribe((res) => {
      this.bio = res.bio;
      this.registerDate = res.fecha_creacion;
      this.registerDate = this.registerDate.substr(0, 10);
      this.tipoUser = res.rol;
    })
  }

  editBio() {
    $('#aboutMe-bio').removeAttr('disabled');
    $('#edit-button').addClass('not-display');
    $('#save-cancel-button').removeClass('not-display');
  }

  saveBio() {
    this.bio = $('#aboutMe-bio').val();
    var data = {
      'bio': this.bio
    }
    console.log(data);
    this.userS.updateUserInfo(data).subscribe((res) => {
      console.log(res);
    });
    $('#aboutMe-bio').attr('disabled', '');
    $('#save-cancel-button').addClass('not-display');
    $('#edit-button').removeClass('not-display');
  }

  cancelBio() {
    $('#aboutMe-bio').attr('disabled', '');
    $('#aboutMe-bio').text(this.bio);
    $('#save-cancel-button').addClass('not-display');
    $('#edit-button').removeClass('not-display');
  }
}
