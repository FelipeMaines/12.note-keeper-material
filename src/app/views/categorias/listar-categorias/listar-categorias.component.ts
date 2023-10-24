import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';
import { CategoriasService } from '../services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent implements OnInit{
  categorias$?: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriasService) {}

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.selecionarTodos();

    console.log(this.categorias$.subscribe(res => console.log(res)))
  }

}
