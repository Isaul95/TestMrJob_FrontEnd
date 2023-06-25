import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExameneService } from 'src/app/services/examene.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  categorias:any =[

  ]

  // Inicializamos los datos
  examenData = {
    titulo:'',
    descripcion:'',
    puntosMaximos:'',
    numeroDePreguntas:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }

  constructor(
    private categoriaService: CategoriaService, 
    private snack:MatSnackBar,
    private examenService:ExameneService,
    private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);        
      },
      (error) => {
        console.log(error);
        Swal.fire('Error...!!!','Error al cargar las categorias...!','error');
      }
    )
  }

  guardarCuestionario(){
    console.log(this.examenData);

    if(this.examenData.titulo.trim() == '' || this.examenData.titulo.trim() == null){
      this.snack.open("El título es requerido...!!!",'',{
        duration:3000
      })
      return ;
    }

    this.examenService.agregarExamen(this.examenData).subscribe(
      (dato:any) => {        
        Swal.fire('Nuevo examen agregado','El examen ha sido agregada con éxito...!!!', 'success');
        // ISAUL:Esto de abajo es el reset para que se limpie cuando se inserta correctamente...
        this.examenData = {
          titulo:'',
          descripcion:'',
          puntosMaximos:'',
          numeroDePreguntas:'',
            activo:true,
            categoria:{
              categoriaId:''
            }
        }
        this.router.navigate(['/admin/examenes']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error...!!!','Error al guardar el examen','error');
      }
    )
  }


}
