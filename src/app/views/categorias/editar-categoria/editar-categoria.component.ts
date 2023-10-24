import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../models/categoria';
import { CategoriasService } from '../services/categoria.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent {
  form?: FormGroup;
  categoria?: Categoria;
  id?: string;
  
  constructor(private fb: FormBuilder, private categoriaSerive: CategoriasService, private router: Router, private route: ActivatedRoute) {}
 
 
  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['']
    })

    this.categoria = this.route.snapshot.data['categoria'];

   this.form.patchValue(this.categoria!);
  }

  gravar(){
    console.log(this.form?.value);
    this.categoriaSerive.editar(this.categoria!.id!, this.form?.value).subscribe({
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
