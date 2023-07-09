import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriasComponent } from './pages/admin/add-categorias/add-categorias.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboarComponent } from './pages/user/user-dashboar/user-dashboar.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './pages/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { SignupJobComponent } from './pages/signup-job/signup-job.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path:'signup-job',
    component: SignupJobComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    component: DashboardComponent,
    //pathMatch: 'full', // obliga solo accesar al padre en este caso es al -> admin
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'',
        component: WelcomeComponent
      },
      {
        path:'servicios',
        component: ViewCategoriasComponent
      },
      {
        path:'add-categoria',
        component: AddCategoriasComponent
      },
      {
        path:'examenes',
        component: ViewExamenesComponent
      },
      {
        path:'add-examen',
        component: AddExamenComponent
      },
      {
        path:'examen/:examenId',
        component: ActualizarExamenComponent
      },
      {
        path:'ver-preguntas/:examenId/:titulo',
        component: ViewExamenPreguntasComponent
      },
      {
        path:'add-pregunta/:examenId/:titulo',
        component: AddPreguntaComponent
      }
    ]
  },
  {
    path:'user-dashboard',
    component: UserDashboarComponent,
    pathMatch: 'full',
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* Aui es donde configuramos las rutas de navegacion */
