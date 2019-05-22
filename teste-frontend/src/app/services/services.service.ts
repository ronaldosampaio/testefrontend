import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly urlFictiocioMensagens = "http://localhost:3000/mensagens";
  private urlAssuntos = "assets/assuntos.json";//select assuntos
  
  constructor(private http: HttpClient) { }
  
  //retorna json de assuntos dentro da pasta assets
  public getUrlAssuntos(){
    return this.http.get(this.urlAssuntos);
  }
  
  public getIdMensagens(id:number){
    return this.http.get(this.urlFictiocioMensagens +"/"+id);
  }
  
  public enviarMensagem(obj){
    return this.http.post(this.urlFictiocioMensagens, obj);
  }

  public getUrlFicticioMensagens(){
    return this.http.get(this.urlFictiocioMensagens);
  }

  public deleteIdMensagens(id:number){
    return this.http.delete(this.urlFictiocioMensagens +"/"+id);
  }
  
 
}
