import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetectarComponent } from './components/detectar/detectar.component';
import { PromedioComponent } from './components/promedio/promedio.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detector', component: DetectarComponent },
  { path: 'average', component: PromedioComponent },
  { path: 'project', component: ProyectoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
