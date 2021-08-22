import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormlibroComponent } from './components/formlibro/formlibro.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { VistaLecturaComponent } from './components/shared/vista-lectura/vista-lectura.component';
import { VistaEscrituraComponent } from './components/shared/vista-escritor/vista-escritura.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LibroService } from './services/libro.service';
import { HttpClientModule } from '@angular/common/http';
import { CollectionComponent } from './components/collection/collection.component';
import { BusquedaComponent } from './components/shared/busqueda/busqueda.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/user-profile/profile/profile.component';
import { PersonalInfoComponent } from './components/user-profile/personal-info/personal-info.component';
import { AboutMeComponent } from './components/user-profile/about-me/about-me.component';
import { SubscriptionsComponent } from './components/user-profile/subscriptions/subscriptions.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { BloqueadoComponent } from './components/bloqueado/bloqueado.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    VistaLecturaComponent,
    VistaEscrituraComponent,
    FormlibroComponent,
    CollectionComponent,
    BusquedaComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PersonalInfoComponent,
    AboutMeComponent,
    SubscriptionsComponent,
    UsuariosComponent,
    BloqueadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
