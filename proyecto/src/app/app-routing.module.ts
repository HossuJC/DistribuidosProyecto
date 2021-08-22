import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { VistaLecturaComponent } from './components/shared/vista-lectura/vista-lectura.component';
import { VistaEscrituraComponent } from './components/shared/vista-escritor/vista-escritura.component';
import { FormlibroComponent } from './components/formlibro/formlibro.component';
import { CollectionComponent } from './components/collection/collection.component';
import { BusquedaComponent } from './components/shared/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/user-profile/profile/profile.component';
import { from } from 'rxjs';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { BloqueadoComponent } from './components/bloqueado/bloqueado.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'homelector', component: HomeComponent }, //
  { path: 'homeescritor', component: HomeComponent }, //
  { path: 'vistalectura', component: VistaLecturaComponent },
  { path: 'vistaescritura/:id', component: VistaEscrituraComponent },
  { path: 'formlibro', component: FormlibroComponent }, //
  { path: 'coleccion', component: CollectionComponent }, //
  { path: 'busqueda', component: BusquedaComponent }, //
  { path: 'busqueda/:texto', component: BusquedaComponent }, //
  { path: 'login', component: LoginComponent }, //
  { path: 'register', component: RegisterComponent }, //
  { path: 'profile', component: ProfileComponent }, //
  { path: 'usuarios', component: UsuariosComponent }, //
  { path: 'bloqueado', component: BloqueadoComponent }, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
