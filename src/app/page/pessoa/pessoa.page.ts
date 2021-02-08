import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  pessoas: any = [];
  constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController, private navController: NavController) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( param => {
      if(param['id']){
        this.pessoas = JSON.parse(localStorage.getItem("pessoaBD"));
        for(var i = 0; i < this.pessoas.length; i++){
          if(this.pessoas[i].id === param['id']){
            this.pessoas.splice(i, 1);
            localStorage.setItem("pessoaBD", JSON.stringify(this.pessoas));
            this.mostrarAlerta("Excluida");
          }
        }
      }
    });
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

  async ionViewWillEnter(){
    this.pessoas = JSON.parse(localStorage.getItem("pessoaBD"));
    if(!this.pessoas){
      this.pessoas = [];
      localStorage.setItem("pessoaBD", JSON.stringify(this.pessoas));
    }
  }

}
