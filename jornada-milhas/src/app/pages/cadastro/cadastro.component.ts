import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from './../../core/services/formulario.service';
import { Component } from '@angular/core';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ){}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;

      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log("Cadastro Realizado", value);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log("Erro ao realizar cadastro", err);
        }
      })
    }


  }
}
