import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.scss']
})

export class Prueba2Component implements OnInit {

  date: string = "";
  time: string = "";
  fullTime: string = "";

  date2: string = "";
  date10: string = "";
  time2: string = "";
  fullTime2: string = "";

 fechaCompleta = "";
  
  times:string = '';
  
  tipo:string = '12';
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

  obtenerFecha(fecha: string, hora: string){
    this.fechaCompleta = fecha + "T" + hora + ":00";
  }

}
