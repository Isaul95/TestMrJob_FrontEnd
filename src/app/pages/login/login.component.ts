import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : '',
    "password" : ''
  }

  constructor(private snack: MatSnackBar, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }


formSubmit(){
  //console.log("Here isaul....");
  if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open("El nombre de usuario es requerido...!!!", "Aceptar", {
        duration : 3000
      });
  }
  if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
    this.snack.open("La contraseña es requerido...!!!", "Aceptar", {
      duration : 3000
    });
  }

  this.loginService.generaToken(this.loginData).subscribe(
    (data:any) =>{
      console.log(data);

      this.loginService.loginUser(data.token); // almacena en el locastorage el token
      // vamos a tener el actual usuario
      this.loginService.getCurrentUser().subscribe((user:any) => {
        this.loginService.setUser(user); // Esto estable en el localStorage un usuario el actual
        console.log('USER-ACTUAL->',user);
        console.log('ROL-> ', this.loginService.getUserRol());

        if(this.loginService.getUserRol() == "Jobers"){
          // dashboard admin
          // window.location.href = '/admin';
          this.router.navigate(['admin']);
          this.loginService.loginStatusSubjec.next(true);

        }else if(this.loginService.getUserRol() == "Job"){
          // dashboard user
          // window.location.href = '/user-dashboard';
          this.router.navigate(['user-dashboard']);
          this.loginService.loginStatusSubjec.next(true);

        }else{
          this.loginService.logout(); // regresa al login
        }
      })

    },(error) =>{
      console.log(error);
      this.snack.open("Detalles inválidos, vuelva a intentar...!!!", "Aceptar", {
        duration : 3000
      });
    }
  )
}


}
