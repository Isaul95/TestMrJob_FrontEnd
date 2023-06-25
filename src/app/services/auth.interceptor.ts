import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    /** 
     * Interceptor: Se va encargar de modificar las peticiones.
     */

    constructor(private loginService:LoginService){

    }

    /** Este metodo lo que hace es modificar la peticion que reciba, lo clona y lo modifica agregando una cabecera el Bearer(Adjunta el token en cabecera).
     * En caso contrario si la peticion no lleva el token falla. Error http 401 Unauthorized
     * */ 

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.loginService.getToken(); // Obtenemos el token
          if(token != null){
             authReq = authReq.clone({
                setHeaders : {Authorization: `Bearer ${token}`}
             }) //Establecer cabeceras
          }
          return next.handle(authReq);        
    }

}


export const authInterceptorProviders = [
    {
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi:true
    }
]