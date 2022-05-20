import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentescursosComponent } from './componentescursos/componentescursos.component';

const routes: Routes = [
  {path:'', component: ComponentescursosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
