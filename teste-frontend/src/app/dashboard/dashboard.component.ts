import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  resultadoMensagens: any[]=[];
  dashboardId: any[]=[];
  mostrarMensagemSelecionada: boolean=false;
 
  
  constructor(private service: ServicesService, 
              private router: Router,
              private toastr: ToastrService) { }

  getMensagens(){
    this.service.getUrlFicticioMensagens()
        .subscribe((res:any)=>{
        this.resultadoMensagens=res;
        console.log("Todas Mensagens -> ", this.resultadoMensagens);
    })
  }

  mostrarMensagemUnica(id: number) {
      //this.router.navigate(['dashboard', id]) 
      this.service.getIdMensagens(id)
      .subscribe((res:any) =>{
           this.dashboardId = res;
           console.log("Mensagem selecionada ->",this.dashboardId);
           ()=> this.getMensagens()

      })
      this.mostrarMensagemSelecionada=true;
 }

 excluirMensagem(id:number){
     this.service.deleteIdMensagens(id)
     .subscribe(
         success => this.toastr.warning("Mensagem excluida com sucesso!"),
         error => this.toastr.error("Erro ao excluir Mensagem!", error),
         () => this.getMensagens(),         
     );
     this.mostrarMensagemSelecionada=false
      
      
}

  ngOnInit() {
    this.getMensagens();
    
  }
  
  

}
