import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPessoaPage } from './add-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: AddPessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPessoaPageRoutingModule {}
