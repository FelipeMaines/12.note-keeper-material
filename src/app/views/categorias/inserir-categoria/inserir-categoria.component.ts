import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from '../models/categoria';
import { CategoriasService } from '../services/categoria.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/notification/services/notification.service';

@Component({
  selector: 'app-inserir-categoria',
  templateUrl: './inserir-categoria.component.html',
  styleUrls: ['./inserir-categoria.component.scss']
})
export class InserirCategoriaComponent implements OnInit{
  form?: FormGroup;
  
  constructor(private fb: FormBuilder, private categoriaSerive: CategoriasService, private router: Router, private notificarionService: NotificationService) {}
 
 
  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['']
    })
  }

  gravar(){
    console.log(this.form?.value);
    this.categoriaSerive.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err)
    })
  }

  processarSucesso(res: Categoria){
    this.router.navigate(['/categorias', 'listar']);
    this.notificarionService.sucesso(`Categoria '${res.titulo}' cadastrada com sucesso!`)
  }

  processarFalha(err: any){
    console.error('Erro:', err);
    this.notificarionService.sucesso(`Erro ao cadastrar categoria: ${err}`)
  }
}
