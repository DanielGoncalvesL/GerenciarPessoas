import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from "@ionic/angular";
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

  constructor(public alertController: AlertController ,private activatedRoute: ActivatedRoute, private navController: NavController) { }

  ngOnInit() {
    this.pessoas = JSON.parse(localStorage.getItem("pessoaBD"));
    if(!this.pessoas){
      this.pessoas = [];
      localStorage.setItem("pessoaBD", JSON.stringify(this.pessoas));
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

    if(this.pessoas.find( pessoa => pessoa.id === this.pessoa.id)){
      for(var i = 0; i < this.pessoas.length; i++){
        if(this.pessoas[i].id == this.pessoa.id){
          this.pessoas[i] = this.pessoa;
          this.mostrarAlerta('Editada');
        }
      }
    }else{
      this.pessoa.id = uuid();
      this.pessoas.push(this.pessoa);
      this.mostrarAlerta('Salva');
    }

    localStorage.setItem("pessoaBD", JSON.stringify(this.pessoas));
    this.navController.navigateBack('/pessoa');
  }

  async mostrarAlerta(parametro: string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Pessoa ' + parametro + ' Com Sucesso!',
      buttons: ['OK'] 
    });

    await alert.present();
  }
}
