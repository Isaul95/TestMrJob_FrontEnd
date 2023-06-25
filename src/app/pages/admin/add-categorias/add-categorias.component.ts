import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrls: ['./add-categorias.component.css']
})
export class AddCategoriasComponent implements OnInit {

  categoria = {
    titulo:'',
    descripcion:''
  }

  constructor(private categoriaService:CategoriaService ,private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmitCateg(){
    if(this.categoria.titulo.trim() == '' || this.categoria.descripcion.trim() == null){
      this.snack.open("El título es requerido...!!!",'',{
        duration:3000
      })
      return ;
    }

    this.categoriaService.agregarCategorias(this.categoria).subscribe(
      (dato:any) => {
        this.categoria.titulo = '';
        this.categoria.descripcion = '';
        Swal.fire('Categoría agregada','La categoría ha sido agregada con éxito...!!!', 'success');
        this.router.navigate(['/admin/categorias']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error...!!!','Error al guardar la categoría','error');
      }
    )
  }

}
