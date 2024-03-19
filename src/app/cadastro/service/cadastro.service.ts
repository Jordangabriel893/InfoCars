import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


  getCadastro(id) {
    const objects = localStorage.getItem('carros');
    const parseObjects = JSON.parse(objects);
    const sameCar = parseObjects.find(car => car.id == id);
    if (sameCar) {
      return sameCar
    } else {
      return {}
    }

  }

  getCars() {
    const objects = localStorage.getItem('carros');
    const parseObjects = JSON.parse(objects);
    return parseObjects;
  }
  setCars() {
    return this.http.get<any>('https://my-json-server.typicode.com/Jordangabriel893/cars-api/cars')
  }

  adicionaCadastro(object: any) {
    const objects = localStorage.getItem('carros');
    const parseObjects = JSON.parse(objects);
    object.id = parseObjects.length + 1;
    parseObjects.push(object);
    localStorage.setItem('carros', JSON.stringify(parseObjects));
    return object

  }

  editarCadastro(object: any, id) {
    const objects = localStorage.getItem('carros');
    let parseObjects = JSON.parse(objects);

    let sameCar = parseObjects.find(car => car.id == id);
    if (sameCar) {
      parseObjects.find(car => car.id == id).id = object.id;
      parseObjects.find(car => car.id == id).marca = object.marca;
      parseObjects.find(car => car.id == id).modelo = object.modelo;
      parseObjects.find(car => car.id == id).placa = object.placa;
      parseObjects.find(car => car.id == id).chassi = object.chassi;
      parseObjects.find(car => car.id == id).renavam = object.renavam;
      parseObjects.find(car => car.id == id).ano = object.ano;
    }
    localStorage.setItem('carros', JSON.stringify(parseObjects));
    if (sameCar) {
      return sameCar
    } else {
      return {}
    }
  }
}
