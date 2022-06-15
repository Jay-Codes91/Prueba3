import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.component.html',
  styleUrls: ['./prueba3.component.scss']
})
export class Prueba3Component implements OnInit {

  date = new Date;
  hora: string = '';
  horaFin: string ='15:30:00';
 
  date2 = Date.now;
  constructor() {

    this.hora = this.date.toLocaleTimeString();
    console.log("Hora local " + this.hora);
    console.log("Hora fin2: " + this.horaFin);
 
    //console.log(this.date.toLocaleTimeString());
    if(this.horaFin > this.hora){
      console.log("Son más de la 1");
      alert("Se terminó el tiempo");
    }else{
      console.log("Son menos de la 1");
    }
   }

  ngOnInit(): void {
  }

}
