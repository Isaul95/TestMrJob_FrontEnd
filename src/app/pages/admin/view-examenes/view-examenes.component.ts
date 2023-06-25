import { Component, OnInit } from '@angular/core';
import { ExameneService } from 'src/app/services/examene.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})
export class ViewExamenesComponent implements OnInit {

  examenes : any = [

  ]

  constructor(private examenService:ExameneService) { }

  ngOnInit(): void {
    this.examenService.listarCuestionarios().subscribe(
      (dato:any) => {
        this.examenes = dato;
        console.log(this.examenes);
        //Swal.fire('Categoría agregada','La categoría ha sido agregada con éxito...!!!', 'success');
        //this.router.navigate(['/admin/categorias']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error...!!!','Error al cargar los cuestionarios...!','error');
      }
    )
  }


  eliminarExamen(examenId:any){
    Swal.fire({
      title: 'Eliminar examen',
      text: '¿Esta seguro de eliminar el examen...?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) =>{
      if(result.isConfirmed){
        this.examenService.eliminarExamen(examenId).subscribe(
          (data) => {
            this.examenes = this.examenes.filter((examen:any) => examen.examenId != examenId);
            Swal.fire('Examen eliminado..!!', 'El examen ha sido eliminado de forma correcta...!', 'success');
          },
          (error) => {
            console.log(error);
            Swal.fire('Error..!!', 'Error al eliminar el examen...!', 'error');
            }
        )
      }
    })    
  }

}
