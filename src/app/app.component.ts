import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = "Javier Machuca" ;
  arreglo : number[] = [1,2,3,4,5,6,7,8,9,10];
  PI : number = Math.PI;
  a:number = 0.234;
  value : number =  120456.123;
  video : string = "l401mf_cLwU";
  nombreCompleto = "javier ignacio machuca arrendondo";
  contrasena = "contrasena";
  activar : boolean = true;

}
