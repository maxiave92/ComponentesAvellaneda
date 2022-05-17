import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregable2',
  templateUrl: './entregable2.component.html',
  styleUrls: ['./entregable2.component.scss']
})
export class Entregable2Component implements OnInit {

  constructor() { }

  fecha=new Date(2022,5,11)
  estudiantes=[
    {
      nombre:'Maxi',
      nota:4,
      curso: 'Node'
    },
    {
      nombre: 'Anto',
      nota:10,
      curso: 'net'
    },
    {
      nombre:'emi',
      nota:3,
      curso: 'Angular'
    },
    {
      nombre:'gustavo',
      nota:7,
      curso: 'fox'
    },
    {
      nombre:'lucas',
      nota:5,
      curso: 'React'
    }
  ]
  ngOnInit(): void {
  }

}
