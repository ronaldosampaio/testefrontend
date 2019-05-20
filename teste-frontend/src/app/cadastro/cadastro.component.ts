import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var M: any;
import * as $ from 'jquery';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  obj: object={};
  resultado:any[]=[];

  constructor(private service: ServicesService, 
              private toastr:ToastrService) { }

  enviarMensagem = function(form){
    
    this.obj={
        "nome": form.value.nome,
        "telefone": form.value.telefone,
        "email": form.value.email,
        "titulo": "Titulo da mensagem",
        "assunto": form.value.assunto,
        "mensagem": form.value.mensagem,
        "hora": this.horaMensagem()
    }
    console.log(this.obj);

    this.service.enviarMensagem(this.obj)
    .subscribe(
       success => this.toastr.success("Cadastrado com sucesso!"),
       
       error => this.toastrService.error("Erro ao cadastrar!"),


       (success) => form.reset()
      
    );
    
  }
  
  
  getAssuntos(){
    this.service.getUrlAssuntos()
    .subscribe((data: any)=>{
        this.resultado=data;
        console.log(this.resultado);
    })
  }
  
  horaMensagem() {
    let data = new Date();
    let horas = data.getHours();
    if(horas < 10){
      horas = 0 +horas;
    }
    var minutos = data.getMinutes();
    if(minutos < 10){
      minutos = 0 +minutos;
    }
    return [horas,minutos].join(":");
}

  materializeFunctions(){
      M.updateTextFields();
      $('select').formSelect();
      $('input#input_text, textarea#textarea2').characterCounter();
  }

  ngOnInit() {
    this.materializeFunctions();
    this.getAssuntos();
    
  }

}
