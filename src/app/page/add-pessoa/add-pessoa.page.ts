import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from "@ionic/angular";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.page.html',
  styleUrls: ['./add-pessoa.page.scss'],
})
export class AddPessoaPage implements OnInit {

  id:string;
  pessoas: any = [];
  pessoa = {
    id: null,
    nome: null,
    dataNascimento: null,
    cpf: null,
    telefone:null,
    cep: null
  };

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
    this.pessoas = JSON.parse(localStorage.getItem("pessoaBD"));
    if(!this.pessoas){
      this.pessoas = [];
      localStorage.setItem("pessoaBD", JSON.stringify(this.pessoas));
    }

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.pessoas[this.id] = this.pessoa;
    }else{
      this.pessoas.push(this.pessoa);
    }

    this.activatedRoute.params.subscribe( param => {
      if(param['id']){
        this.pessoas = JSON.parse(localStorage.getItem("pessoaBD"));
        for(var i = 0; i < this.pessoas.length; i++){
          if(this.pessoas[i].id == param['id']){
            this.pessoa = this.pessoas[i];
          }
        }
      }
    });
  }

  async submitForm(){
    this.pessoas = JSON.parse(localStorage.getItem("pessoaBD"));

    if(this.id){
      this.pessoas[this.id] = this.pessoa;
    }else{
      this.pessoa.id = uuid();
      this.pessoas.push(this.pessoa);
    }

    localStorage.setItem("pessoaBD", JSON.stringify(this.pessoas));
    this.navController.navigateBack('/pessoa');
  }
}
