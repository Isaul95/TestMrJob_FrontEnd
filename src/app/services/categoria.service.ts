import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient:HttpClient) { }


  public listarCategorias(){
    return this.httpClient.get(`${baserUrl}/categoria/`);
  }

  public agregarCategorias(categoria:any){
    return this.httpClient.post(`${baserUrl}/categoria/`,categoria);
  }



}
