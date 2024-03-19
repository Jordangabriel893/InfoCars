import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro/service/cadastro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'InfoCars';
  constructor( private cadastroSvc: CadastroService){
    this.cadastroSvc.setCars().subscribe(item => {
      localStorage.setItem('carros', JSON.stringify(item));
    })
  }
  ngOnInit(): void {
   
  }
}
