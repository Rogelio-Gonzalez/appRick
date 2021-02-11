import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forms : FormGroup;

  constructor(private fb : FormBuilder, private router : Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  saveInfoUser(){
    if(this.forms.invalid){
      return Object.values(this.forms.controls).forEach(data => {
        data.markAllAsTouched();
      });
    }
  }
  createForm(){
    this.forms = this.fb.group({
      email : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+[\.][a-z]{2,3}$')]],
      password : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)] ],
    });
  }
  validField(field : string):string{
    const validateField = this.forms.get(field);
    if(validateField.invalid && validateField.touched){
      return 'is-invalid';
    }
    if(validateField.valid && validateField.touched){
      return 'is-valid';
    }
  }
  invalidField(field : string):boolean{
    if(this.forms.get(field).invalid && this.forms.get(field).touched){
      return true;
    }
  }

}
