import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

/* El xq el subscribe para hacer la peticion en angular TS:

OBSERVABLE: flujo de datos, una coleccion de eventos

OBSERVER: son los objetos k estan escuchando el flujo de datos

EN LA PETICION SOY UN OBSERVADOR ME TENGO QUE SUSCRIBIR PARA PODER OBTENER ESOS DATOS, ETC,

*/
 formSubmit(){
  alert('ENTRA INICIO......');

  console.log(this.user);
  if(this.user.username == '' || this.user.username == null){
    alert('El nombre de usuario es Requerido...!');
    return;
  }

  this.userService.registrarUsuario(this.user).subscribe(
    (data) => {
      console.log(data);
      alert('Usuario guardado con Exito...!');
    },(error) => {
      console.log(error);
      alert('Ha ocurrido un error en el sistema...!');
    }    
  )
 }


}
