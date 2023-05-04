import { ClienteLstComponent } from './cliente-lst/cliente-lst.component';
import { ClienteFrmComponent } from './cliente-frm/cliente-frm.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
                        {path:"clientes", component:ClienteLstComponent}, 
                        {path:"cliente/novo", component:ClienteFrmComponent},
                        {path:"cliente/editar/:id", component:ClienteFrmComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
