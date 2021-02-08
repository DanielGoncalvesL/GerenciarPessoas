import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPessoaPageRoutingModule } from './add-pessoa-routing.module';

import { AddPessoaPage } from './add-pessoa.page';

import {BrMaskerModule} from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPessoaPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [AddPessoaPage]
})
export class AddPessoaPageModule {}
