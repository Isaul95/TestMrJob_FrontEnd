import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent implements OnInit {

  categorias:any= [
  ]
 /*   {
      categoriaId : 1,
      titulo: "Lenguajes de programacion",
      descripcion: "Categoria de prueba...",
    },
    {
      categoriaId : 2,
      titulo: "Lenguajes de programacion",
      descripcion: "Categoria de prueba...",
    },
    {
      categoriaId : 3,
      titulo: "Lenguajes de programacion",
      descripcion: "Categoria de prueba...",
    },
    {
      categoriaId : 4,
      titulo: "Lenguajes de programacion",
      descripcion: "Categoria de prueba...",
    }*/


  constructor(private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
    (dato) => {
      this.categorias = dato;
      console.log(this.categorias);      
    },
    (error) => {
      console.log(error);
      Swal.fire('Error..!!', 'Error al cargar las categorias...!', 'error');
      }
    )      
  }

}
