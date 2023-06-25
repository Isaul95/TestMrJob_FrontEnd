import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExameneService } from 'src/app/services/examene.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private examenService:ExameneService, private categoriaService:CategoriaService, private router:Router) { }

  examenId = 0;
  examen:any;
  categorias:any;

  ngOnInit(): void {

    this.examenId = this.route.snapshot.params['examenId'];
    alert(this.examenId);
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (dato) => {
        this.examen = dato;
        console.log(this.examen);        
      },
      (error) => {
        console.log(error);
      }
    )


    this.categoriaService.listarCategorias().subscribe(
      (dato) => {
        this.categorias = dato;
        console.log(this.categorias);
      },
      (error) => {
        alert('Error al cargar las categorias...');
        console.log(error);        
      }

    )
  }

  // peticion para actualizar el examen actual...
  public actualizarDatosExamen(){
    this.examenService.actualizarExamen(this.examen).subscribe(
      (dato:any) => {        
        Swal.fire('Examen actualizado','El examen ha sido actualizado con éxito...!!!', 'success').then(
          (e) => {
            this.router.navigate(['/admin/examenes']);
          }
        );  
      },    

      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el examen...!!!', 'error');
        console.log(error);        
      }
    )
  }


}
