import { Component, OnInit } from '@angular/core';

import { CadastroService } from '../cadastro/service/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})

export class DashboardComponent implements OnInit {
  Allcadastros: any
  cadastrosDefault;
  resultsLength = 0;
  queryField: string;

  constructor(private cadastroSvc: CadastroService, private router: Router) { }

  ngOnInit(): void {
    const carros = this.cadastroSvc.getCars()
    this.cadastrosDefault = carros;
    this.Allcadastros = carros;
    this.resultsLength = carros.length;

  }


  onSearch() {
    let value = this.queryField.toLowerCase();
    if (value && (value = value.trim()) !== '') {
      this.Allcadastros = this.cadastrosDefault.filter((x) =>
        x.modelo.toLowerCase().includes(value) || x.marca.toLowerCase().includes(value) || x.placa.toLowerCase().includes(value) ||
        x.renavam.toLowerCase().includes(value) || x.chassi.toLowerCase().includes(value) || x.ano.toString().toLowerCase().includes(value)
      );
    } else {
      this.Allcadastros = this.cadastrosDefault;

    }
    this.resultsLength = this.Allcadastros.length;
  }

  editar(cadastroid) {
    this.router.navigate(['/editar', cadastroid])
  }


}
