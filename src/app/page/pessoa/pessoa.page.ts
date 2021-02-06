import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  pessoas: any = [];
  constructor() { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.pessoas = JSON.parse(localStorage.getItem("pessoaBD"));
    if(!this.pessoas){
      this.pessoas = [];
      localStorage.setItem("pessoaBD", JSON.stringify(this.pessoas));
    }
  }

}
