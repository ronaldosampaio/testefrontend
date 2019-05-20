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
 
  //id: number;
  
  constructor(private service: ServicesService, 
              private router: Router,
              private toastr: ToastrService) { }

  getMensagens(){
    this.service.getUrlFicticioMensagens()
        .subscribe((data:any)=>{
        this.resultadoMensagens=data;
        console.log("getMensagens -> ", this.resultadoMensagens);
    })
  }

  mostrarMensagemUnica(id:number) {
    this.router.navigate(['dashboard', id]) 
    this.service.getIdMensagens(id)
    .subscribe((data:any) =>{
     this.dashboardId = data;
     console.log("teste ->",this.dashboardId);
   })
 }

 excluirMensagem(id:number){
  this.service.deleteIdMensagens(id)
  .subscribe(
       success => this.toastr.warning("Mensagem excluida com sucesso!"),
       error => this.toastr.error("Erro ao excluir Mensagem!"),
       ()=> this.getMensagens()
  );
}

  ngOnInit() {
    this.getMensagens();
  }
  
  

}
