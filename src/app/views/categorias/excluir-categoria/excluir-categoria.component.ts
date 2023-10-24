import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriasService } from '../services/categoria.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.scss']
})
export class ExcluirCategoriaComponent implements OnInit{
  categoria?: Categoria;
  form?: FormGroup;

  constructor(private route: ActivatedRoute,private fb: FormBuilder, private categoriaService: CategoriasService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['']
    })

    this.categoria = this.route.snapshot.data['categoria'];

    this.form.patchValue(this.categoria!);
  }

  excluir(){
    this.categoriaService.excluir(this.categoria!.id!).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err)
    })
  }

  processarSucesso(res: Categoria){
    this.router.navigate(['/categorias', 'listar']);

  }

  processarFalha(err: any){
    console.error('Erro:', err);

  }
}
