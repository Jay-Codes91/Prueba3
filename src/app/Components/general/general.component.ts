import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  titulo: string = '';
  txt: string = '';
  nombre: string = 'Mario';
  frutas = new Array('Banano', 'Manzana', 'Piña', 'Uvas');

  constructor() {
    this.titulo = 'Repaso General';

    setTimeout(() => {
      this.nombre = "Peter";
    }, 2000);


  }

  ngOnInit(): void {
    this.frutas.push('Pera');
    this.frutas.pop();
  }

}
