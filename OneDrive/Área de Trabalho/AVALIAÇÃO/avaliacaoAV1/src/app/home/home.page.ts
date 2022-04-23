import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;

  constructor() {}
  calcularImc(): any {
    let imc = 0;
    let alt = this.altura;
    let pes = this.peso;

    this.imc = pes / (alt ** 2)

    if ((this.imc >= 18.5) && (this.imc <= 24.9))
    {
      return '!NORMAL!'
    }
    else if ((this.imc >= 25.0) && (this.imc <= 29.9))
    {
      return '!SOBREPESO!'
    }
    else if ((this.imc >= 30.0) && (this.imc <= 39.0))
    {
      return '!OBESIDADE!'
    }
    else if (this.imc >= 40.0)
    {
      return '!OBESIDADE GRAVE!'
    }
}}
