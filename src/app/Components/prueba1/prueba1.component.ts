import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.scss']
})
export class Prueba1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if ("loading" in HTMLImageElement.prototype) {
      console.log("El navegador soporta `lazy-loading`...");
    } else {
      console.log("`lazy-loading` no soportado...");
    }
  }

}
