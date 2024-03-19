import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro/service/cadastro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'InfoCars';
  constructor( private cadastroSvc: CadastroService, private toastr: ToastrService){
    this.cadastroSvc.setCars().subscribe(item => {
      localStorage.setItem('carros', JSON.stringify(item));
      this.toastr.success('Cadastros carregados com sucesso', 'Sucesso');
    })
  }
  ngOnInit(): void {
   
  }
}
