import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-view-examen-preguntas',
  templateUrl: './view-examen-preguntas.component.html',
  styleUrls: ['./view-examen-preguntas.component.css']
})
export class ViewExamenPreguntasComponent implements OnInit {

  examenId:any;
  titulo:any;
  preguntas:any = [];

  constructor(private route:ActivatedRoute, private preguntaService:PreguntaService) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.titulo = this.route.snapshot.params['titulo'];
    
    console.log(this.examenId);
    console.log(this.titulo);

    this.preguntaService.listarPreguntasDelExamen(this.examenId).subscribe(
      (dato:any) => {
        this.preguntas = dato;
        console.log(dato);
        //Swal.fire('Categoría agregada','La categoría ha sido agregada con éxito...!!!', 'success');
        //this.router.navigate(['/admin/categorias']);
      },
      (error) => {
        console.log(error);
        //Swal.fire('Error...!!!','Error al cargar los cuestionarios...!','error');
      }
    )

  }

}
