import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  date: string = "";
  date2: string = "";
  time: string = "";
  time2: string = "";
  cambiarDias: boolean = false;
  mostrarHora: boolean = true;
  visibleSidebar: any;
  participantes: string[] = [];

  temaColores: any[] = [
    {nombre: 'Rojo', code: '#EF9A9A'},
      {nombre: 'Morado', code: '#B39DDB'},
      {nombre: 'Indigo', code: '#9FA8DA'},
      {nombre: 'Azul claro', code: '#81D4FA'},
      {nombre: 'Verde claro', code: '#C5E1A5'},
      {nombre: 'Ámber', code: '#FFE082'},
      {nombre: 'Verde azulado', code: '#80CBC4'},
      {nombre: 'Naranja', code: '#FFCC80'},
  ];

  constructor(private fb: FormBuilder) { 
    

  
  }

  
  ngOnInit(): void {
    
  }


  saveData(){

  }





}
