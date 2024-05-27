import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';


interface personModel {
  nombres:string;
  apellidos:string;
  fechaNacimiento:Date;
  direccion:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //BrowserModule,
    RouterOutlet,
    FormsModule,
    CommonModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  nombres: string = "Jhair Benjamin";
  apellidos: string = "Lescano Guevara";

  personas: personModel[] = [
    {
      nombres: "Jhair",
      apellidos:"Lescano Guevara",
      fechaNacimiento: new Date,
      direccion: "Mi dirección"
    },
    {
      nombres: "Luis",
      apellidos:"Lujan Escobar",
      fechaNacimiento: new Date,
      direccion: "Mi dirección"
    },
    {
      nombres: "Jhonatan",
      apellidos:"Lescano Guevara",
      fechaNacimiento: new Date,
      direccion: "Mi dirección"
    },
    {
      nombres: "Maria",
      apellidos:"Bisso chavez",
      fechaNacimiento: new Date,
      direccion: "Mi dirección"
    },
    {
      nombres: "Raul",
      apellidos:"Puertar Chio",
      fechaNacimiento: new Date,
      direccion: "Mi dirección"
    }

  ]

}
