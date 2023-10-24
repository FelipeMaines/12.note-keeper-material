import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from '@angular/router';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';
import { Categoria } from './models/categoria';
import { createInjectableType } from '@angular/compiler';
import { CategoriasService } from './services/categoria.service';

const FormsCategoriaResolver: ResolveFn<Categoria> = (route: ActivatedRouteSnapshot) => {
  return inject(CategoriasService).selecionarPorId(route.paramMap.get('id')!);
}

const routes: Routes = [
  {
    path: 'listar',
    component: ListarCategoriasComponent
  },
  {
    path: 'inserir',
    component: InserirCategoriaComponent
  },
  {
    path: 'editar/:id',
    component: EditarCategoriaComponent,
    resolve: {categoria: FormsCategoriaResolver}

  },
  {
    path: 'excluir/:id',
    component: ExcluirCategoriaComponent,
    resolve: {categoria: FormsCategoriaResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
