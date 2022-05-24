import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entregable3',
  templateUrl: './entregable3.component.html',
  styleUrls: ['./entregable3.component.scss']
})
export class Entregable3Component implements OnInit {
  formUsuario: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario=this.fb.group({
      username:['',Validators.required],
      mail:['',Validators.email],
      pass:['',[Validators.minLength(8),Validators.maxLength(8)]]
    })
  }

  submit(){
    console.log(this.formUsuario.value)
  }

}
