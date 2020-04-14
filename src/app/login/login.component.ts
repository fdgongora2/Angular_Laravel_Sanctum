import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  LoginFormulario: FormGroup;

  ngOnInit(): void {
    this.LoginFormulario = new FormGroup({
      'usuario': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'contrasena': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)])
      
  }); // <-- add custom validator at the FormGroup level
  }

  get usuario() { return this.LoginFormulario.get('usuario') }
  get contrasena() { return this.LoginFormulario.get('contrasena') }


}
