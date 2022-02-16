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
  //form: FormGroup;

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

  activities: any[] = [
    {
      title: 'Defensa proyecto',
      allDay: false,
      startDate: '2022-02-20',
      startHour: '10:30:00',
      endDate: '2022-02-20',
      endHour: '11:30:00',
      description: 'Defensa del proyecto de programación avanzada, cod: 03125',
      participants: 'mariacastro@uned.ac.cr, kimberly.solano@uned.ac.cr',
      backgroundColor: 'Azul claro'
    }
  ]

  constructor(private fb: FormBuilder) { 
    
    /*this.form = this.fb.group({
      title: ['', Validators.required],
      days: [''],
      allDay: [''],
      startDate: ['', Validators.required],
      startHour: ['', Validators.required],
      endDate: ['', Validators.required],
      endHour: ['', Validators.required],
      description: [''],
      participants: [''],
      backgroundColor: ['']
    })*/
  
  }

  
  ngOnInit(): void {
    
  }


  saveData(){

    /* const activity: any = {
       title: this.form.get('title'),
       allDay: this.form.get('allDay'),
       startDate: this.form.get('startDate'),
       startHour: this.form.get('startHour'),
       endDate: this.form.get('endDate'),
       endHour: this.form.get('endHour'),
       description: this.form.get('description'),
       participants: this.form.get('participants'),
       backgroundColor: this.form.get('backgroundColor')
     }*/


  }





}
