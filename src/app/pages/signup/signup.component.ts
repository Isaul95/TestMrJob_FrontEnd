import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombrecompleto : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

/* El xq el subscribe para hacer la peticion en angular TS:
OBSERVABLE: flujo de datos, una coleccion de eventos
OBSERVER: son los objetos k estan escuchando el flujo de datos
EN LA PETICION SOY UN OBSERVADOR ME TENGO QUE SUSCRIBIR PARA PODER OBTENER ESOS DATOS, ETC,
*/

 formSubmit(){

  console.log(this.user);
  if(this.user.nombrecompleto == '' || this.user.email == '' || this.user.password == ''){
    this.snack.open("Los campos son obligatorios.!", "Aceptar", {
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
    return;
  }

  this.userService.registrarUsuario(this.user).subscribe(
    (data) => {
      console.log(data);
      Swal.fire('Usuario guardado', 'Usuario guardado con Exito en el sistema...!', 'success');
    },(error) => {
      console.log(error);
       this.snack.open("A ocurrido un error en el sistema...!", "Aceptar", {
        duration : 3000,
      });
      return;
    }
  )
 }


}
