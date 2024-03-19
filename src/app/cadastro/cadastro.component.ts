import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CadastroService } from './service/cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  id;
  formulario: FormGroup;
  cadastroRecuperado;
  constructor(
    private formBuilder: FormBuilder,
    private cadastroSvc:CadastroService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.id = this.route.snapshot.params['id'];
      
     }

  ngOnInit(): void {
    if(this.id){
      this.getCadastro()
    }else{
      this.createForm();
    };

  }


  onSubmit() {
    if(this.formulario.valid){
      if(!this.id){this.cadastroSvc.adicionaCadastro(this.formulario.value)};
      if(this.id){this.cadastroSvc.editarCadastro(this.formulario.value, this.id)}
        this.router.navigate(['/dashboard']);
    } 
    
  }
  reset(){
    this.formulario.reset();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      modelo: [null, Validators.required],
      marca: [null, Validators.required],
      placa: [null, Validators.required],
      renavam: [null, Validators.required],
      chassi: [null, Validators.required],
      ano: [null, Validators.required],
  })
  }
  getCadastro(){
   this.cadastroRecuperado = this.cadastroSvc.getCadastro(this.id);
    this.formulario = this.formBuilder.group({
      id:[this.cadastroRecuperado.id ],
      modelo: [this.cadastroRecuperado.modelo ? this.cadastroRecuperado.modelo : null, Validators.required],
      marca: [this.cadastroRecuperado.marca ? this.cadastroRecuperado.marca : null, Validators.required],
      placa: [this.cadastroRecuperado.placa ? this.cadastroRecuperado.placa : null, Validators.required],
      renavam: [this.cadastroRecuperado.renavam ? this.cadastroRecuperado.renavam : null, Validators.required],
      chassi: [this.cadastroRecuperado.chassi ? this.cadastroRecuperado.chassi : null, Validators.required],
      ano: [this.cadastroRecuperado.ano ? this.cadastroRecuperado.ano: null, Validators.required],
  })
  }
  verificaNotValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  verificaValidTouched(campo){
    return this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
    aplicaCssErro(campo){
      return{
        'has-error': this.verificaNotValidTouched(campo),
        'has-valid': this.verificaValidTouched(campo)    
    }
      

}
verificaAnoValido(campo){
  const value = this.formulario.value[campo];

  if(value >= 1900 && value <= 2024){ return false }else{ return true }
}
}