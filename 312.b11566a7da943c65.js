"use strict";(self.webpackChunkRepaso=self.webpackChunkRepaso||[]).push([[312],{6312:(B,m,d)=>{d.r(m),d.d(m,{SideNavModule:()=>y});var c=d(6019),s=d(2790),e=d(3668),l=d(7537),u=d(7482),Z=d(825),f=d(481),g=d(5337);function v(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",8),e.TgZ(2,"label",18),e._uU(3,"Fecha de fin"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"p-calendar",36),e.NdJ("ngModelChange",function(i){return e.CHM(n),e.oxw().date2=i}),e.qZA(),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.xp6(5),e.Q6J("showIcon",!0)("readonlyInput",!0)("showButtonBar",!0)("ngModel",n.date2)}}function _(t,a){1&t&&(e.TgZ(0,"label",8),e._uU(1,"Hora de la actividad"),e.qZA())}function T(t,a){1&t&&(e.TgZ(0,"button",51),e._uU(1,"Cancelar"),e.qZA())}function b(t,a){1&t&&(e.TgZ(0,"button",52),e._uU(1,"Confirm tmpl"),e.qZA())}function A(t,a){1&t&&(e.TgZ(0,"button",51),e._uU(1,"Cancelar"),e.qZA())}function h(t,a){1&t&&(e.TgZ(0,"button",52),e._uU(1,"Confirm tmpl"),e.qZA())}function C(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",37),e.TgZ(1,"div",38),e.TgZ(2,"label",39),e._uU(3,"De"),e.qZA(),e.qZA(),e.TgZ(4,"div",40),e.TgZ(5,"input",41),e.NdJ("ngModelChange",function(i){return e.CHM(n),e.oxw().time=i}),e.qZA(),e._UZ(6,"ngx-material-timepicker",42,43),e.qZA(),e.TgZ(8,"div",38),e.TgZ(9,"label",44),e._uU(10,"Hasta"),e.qZA(),e.qZA(),e.TgZ(11,"div",40),e.TgZ(12,"input",45),e.NdJ("ngModelChange",function(i){return e.CHM(n),e.oxw().time2=i}),e.qZA(),e._UZ(13,"ngx-material-timepicker",42,46),e.qZA(),e.YNc(15,T,2,0,"ng-template",null,47,e.W1O),e.YNc(17,b,2,0,"ng-template",null,48,e.W1O),e.YNc(19,A,2,0,"ng-template",null,49,e.W1O),e.YNc(21,h,2,0,"ng-template",null,50,e.W1O),e.qZA()}if(2&t){const n=e.MAs(7),o=e.MAs(14),i=e.MAs(16),r=e.MAs(18),U=e.MAs(20),S=e.MAs(22),p=e.oxw();e.xp6(5),e.Q6J("ngxTimepicker",n)("format",24)("ngModel",p.time),e.xp6(1),e.Q6J("cancelBtnTmpl",i)("confirmBtnTmpl",r),e.xp6(6),e.Q6J("ngxTimepicker",o)("format",24)("ngModel",p.time2),e.xp6(1),e.Q6J("cancelBtnTmpl",U)("confirmBtnTmpl",S)}}function q(t,a){1&t&&(e._uU(0),e._UZ(1,"i",53)),2&t&&e.hij(" ",a.$implicit," \xa0 ")}function N(t,a){if(1&t&&(e.TgZ(0,"option",54),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.Udp("background-color",n.code),e.xp6(1),e.Oqu(n.nombre)}}const M=[{path:"",component:(()=>{class t{constructor(n){this.fb=n,this.date="",this.date2="",this.time="",this.time2="",this.cambiarDias=!1,this.mostrarHora=!0,this.participantes=[],this.temaColores=[{nombre:"Rojo",code:"#EF9A9A"},{nombre:"Morado",code:"#B39DDB"},{nombre:"Indigo",code:"#9FA8DA"},{nombre:"Azul claro",code:"#81D4FA"},{nombre:"Verde claro",code:"#C5E1A5"},{nombre:"\xc1mber",code:"#FFE082"},{nombre:"Verde azulado",code:"#80CBC4"},{nombre:"Naranja",code:"#FFCC80"}]}ngOnInit(){}saveData(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-side-nav"]],decls:68,vars:10,consts:[[1,"container","p-2","d-flex","justify-content-between","bg-light"],["type","button",1,"btnGray"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#Eventos","aria-controls","offcanvasExample",1,"btnPrimary"],["tabindex","-1","id","Eventos","aria-labelledby","EventosLabel",1,"offcanvas","offcanvas-end"],[1,"offcanvas-body"],[1,"d-flex","justify-content-between"],["id","offcanvasExampleLabel",1,"offcanvas-title","fw-bold"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"mt-2"],["for","titulo"],["type","text","id","titulo",1,"form-control","form-control-lg"],[1,"d-flex","mt-2"],["for","dias"],[1,"d-flex","ms-3"],[1,"form-check","form-switch","ms-2"],["type","checkbox","id","dias",1,"form-check-input",3,"change"],["for","allDay"],["type","checkbox","id","allDay",1,"form-check-input",3,"change"],["for","startDate"],["dataType","string","dateFormat","yy/mm/dd","name","date","inputId","icon",3,"showIcon","readonlyInput","showButtonBar","ngModel","ngModelChange"],[4,"ngIf"],["class","mt-2",4,"ngIf"],["class","row mt-2 g-2",4,"ngIf"],[1,"form-group","mt-2"],["for","descripcion"],["id","descripcion","rows","3",1,"form-control"],["for","participantes"],["name","participantes","id","participantes",3,"ngModel","ngModelChange"],["pTemplate","item"],["for","backgroundColor"],["id","backgroundColor",1,"form-select","w-50","mt-2"],["selected",""],["value","one",3,"background-color",4,"ngFor","ngForOf"],[1,"d-flex","mt-5","justify-content-end"],["type","button","disabled","",1,"btnPrimary"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#Eventos",1,"btnGray","ms-2"],["dataType","string","dateFormat","yy/mm/dd","name","date2","inputId","icon",3,"showIcon","readonlyInput","showButtonBar","ngModel","ngModelChange"],[1,"row","mt-2","g-2"],[1,"col-6","col-lg-1"],["for","startTime",1,"mt-2"],[1,"col-6","col-lg-5"],["name","time","data-bs-dismiss","offcanvas","id","startTime","readonly","",1,"form-control","form-control-lg",3,"ngxTimepicker","format","ngModel","ngModelChange"],[3,"cancelBtnTmpl","confirmBtnTmpl"],["picker",""],["for","startTime2",1,"mt-2"],["name","time2","data-bs-dismiss","offcanvas","id","startTime2","readonly","",1,"form-control","form-control-lg",3,"ngxTimepicker","format","ngModel","ngModelChange"],["picker2",""],["cancelBtn",""],["confirmBtn",""],["cancelBtn2",""],["confirmBtn2",""],["data-bs-toggle","offcanvas","data-bs-target","#Eventos",1,"btnGray","me-2"],["data-bs-toggle","offcanvas","data-bs-target","#Eventos",1,"btnPrimary"],[1,"pi","pi-user","ml-2"],["value","one"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e._uU(2,"Ayuda"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"Agregar evento"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"h5",6),e._uU(9,"A\xf1adir actividad"),e.qZA(),e._UZ(10,"button",7),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"form"),e.TgZ(13,"div",8),e.TgZ(14,"label",9),e._uU(15,"T\xedtulo del evento"),e.qZA(),e._UZ(16,"input",10),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"label",12),e._uU(19,"Actividad de m\xe1s de 1 d\xeda:"),e.qZA(),e.TgZ(20,"div",13),e.TgZ(21,"label"),e._uU(22,"No"),e.qZA(),e.TgZ(23,"div",14),e.TgZ(24,"input",15),e.NdJ("change",function(){return o.cambiarDias=!o.cambiarDias}),e.qZA(),e.qZA(),e.TgZ(25,"label"),e._uU(26,"Si"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div",11),e.TgZ(28,"label",16),e._uU(29,"\xbfEvento de todo el d\xeda?"),e.qZA(),e.TgZ(30,"div",13),e.TgZ(31,"label"),e._uU(32,"No"),e.qZA(),e.TgZ(33,"div",14),e.TgZ(34,"input",17),e.NdJ("change",function(){return o.mostrarHora=!o.mostrarHora}),e.qZA(),e.qZA(),e.TgZ(35,"label"),e._uU(36,"Si"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"div",8),e.TgZ(38,"label",18),e._uU(39),e.qZA(),e._UZ(40,"br"),e.TgZ(41,"p-calendar",19),e.NdJ("ngModelChange",function(r){return o.date=r}),e.qZA(),e.qZA(),e.YNc(42,v,6,4,"div",20),e.YNc(43,_,2,0,"label",21),e._UZ(44,"br"),e.YNc(45,C,23,10,"div",22),e.TgZ(46,"div",23),e.TgZ(47,"label",24),e._uU(48,"Descripcion *"),e.qZA(),e._UZ(49,"textarea",25),e.qZA(),e.TgZ(50,"div",8),e.TgZ(51,"label",26),e._uU(52,"Participantes"),e.qZA(),e._UZ(53,"br"),e.TgZ(54,"p-chips",27),e.NdJ("ngModelChange",function(r){return o.participantes=r}),e.YNc(55,q,2,1,"ng-template",28),e.qZA(),e.qZA(),e.TgZ(56,"div",8),e.TgZ(57,"label",29),e._uU(58,"Seleccionar un tema"),e.qZA(),e.TgZ(59,"select",30),e.TgZ(60,"option",31),e._uU(61,"Seleccionar tema"),e.qZA(),e.YNc(62,N,2,3,"option",32),e.qZA(),e.qZA(),e.TgZ(63,"div",33),e.TgZ(64,"button",34),e._uU(65,"A\xf1adir Actividad"),e.qZA(),e.TgZ(66,"button",35),e._uU(67,"Cancelar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(39),e.Oqu(o.cambiarDias?"Fecha de inicio de la actividad":"Fecha de la actividad"),e.xp6(2),e.Q6J("showIcon",!0)("readonlyInput",!0)("showButtonBar",!0)("ngModel",o.date),e.xp6(1),e.Q6J("ngIf",o.cambiarDias),e.xp6(1),e.Q6J("ngIf",o.mostrarHora),e.xp6(2),e.Q6J("ngIf",o.mostrarHora),e.xp6(9),e.Q6J("ngModel",o.participantes),e.xp6(8),e.Q6J("ngForOf",o.temaColores))},directives:[l._Y,l.JL,l.F,u.f,l.JJ,l.On,c.O5,Z.cL,f.jx,l.YN,l.Kr,c.sg,l.Fj,g.I2,g.ro],styles:["#startTime[_ngcontent-%COMP%]:read-only{background-color:#fff}#startTime2[_ngcontent-%COMP%]:read-only{background-color:#fff}#Eventos[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 480px){#Eventos[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width: 481px) and (max-width: 768px){#Eventos[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,x]]}),t})()}}]);