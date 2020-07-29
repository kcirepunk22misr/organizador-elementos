import { RouterModule, Routes } from '@angular/router';
import { PrestamosHomeComponent } from './prestamos-home.component';
import { ListarHerramientasComponent } from './components/listar-herramientas/listar-herramientas.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'prestamos',
    component: PrestamosHomeComponent,
    canActivate: [AuthGuard],
    children: [{ path: ':id', component: ListarHerramientasComponent }],
  },
];

export default RouterModule.forChild(routes);
