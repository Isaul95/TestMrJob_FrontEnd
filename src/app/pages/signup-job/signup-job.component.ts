import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-job',
  templateUrl: './signup-job.component.html',
  styleUrls: ['./signup-job.component.css']
})
export class SignupJobComponent implements OnInit {

  public user = {
    nombrecompleto : '',
    email : '',
    telefono : '',
    password : '',
    tipoServicioOfrece : '',
    nombreNegocio : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){

    console.log(this.user);
    if(this.user.nombrecompleto == '' || this.user.email == '' || this.user.password == '' || this.user.tipoServicioOfrece == '' || this.user.nombreNegocio == ''){
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
        //alert('Usuario guardado con Exito...!');
        Swal.fire('Usuario guardado', 'Usuario guardado con Exito en el sistema...!', 'success');
      },(error) => {
        console.log(error);
        //alert('Ha ocurrido un error en el sistema...!');
         this.snack.open("A ocurrido un error en el sistema...!", "Aceptar", {
          duration : 3000,
        });
        return;
      }
    )
   }


  }


