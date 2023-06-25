import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor( private httpClient:HttpClient) { }


  public listarPreguntasDelExamen(examenId:any){
    return this.httpClient.get(`${baserUrl}/pregunta/examen/todos/${examenId}`);
  }

  public guardarPregunta(pregunta:any){
    return this.httpClient.post(`${baserUrl}/pregunta/`,pregunta);
  }



} // Finally of class
