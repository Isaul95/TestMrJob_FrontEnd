import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Esta
  public loginStatusSubjec = new Subject<boolean>();

  constructor(private httpClient:HttpClient) { }

  // generamos el token (EndPoint)
  public generaToken(loginData: any){
    return this.httpClient.post(`${baserUrl}/generate-token`, loginData);
  }


  // iniciamos sesion y establecemos el token en el localstorage de mi navegador para k se quede guardado x un cierto tiempo
  public loginUser(token: any){
    localStorage.setItem('token',token);
  }

  // Este metodo nos sirve para comprobar si estamos conetados o no
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
      if(tokenStr == undefined || tokenStr == '' || tokenStr == null){ // si el localStroga esta vacio
        return false; // token no esta en sesion o no contected
      }else{
        return true; // Token si conectado si esta en la sesion, aun no ha caducado...
      }
  }


  // cerramos session y destruimos el token en el localstorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user)); //Converts a JavaScript value to a JavaScript Object Notation (JSON) string
  }


  public getUser(){
    let userStr = localStorage.getItem('user'); // obt. el user en el localStorage que almacenamos hay
      if(userStr != null){ // Si existe ese user
        return JSON.parse(userStr); // vamos a retornar
      }else{
        this.logout(); // Si no existe ese user se cierra sesion y retorna null
        return null;
      }
  }

 // Obtener el rol o roles del usuario in login
  public getUserRol(){
     let user = this.getUser();
     return user.authorities[0].authority;
  }

// devuelve el usuario actual que esta iniciando o iniciado sesion...
  public getCurrentUser(){
    return this.httpClient.get(`${baserUrl}/actual-usuario`);

  }

}
