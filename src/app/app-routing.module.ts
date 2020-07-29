import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { BlockLoginGuard } from './guards/block-login.guard';
import { RegisterUserComponent } from './login/register-user/register-user.component';

const routes: Routes = [
  { path: 'registrarse', component: RegisterUserComponent },
  { path: 'login', canActivate: [BlockLoginGuard], component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
