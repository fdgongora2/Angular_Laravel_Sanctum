import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }


  LoginFormulario: FormGroup;

  ngOnInit(): void {
    this.LoginFormulario = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'contrasena': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)])

    }); // <-- add custom validator at the FormGroup level
  }

  get email() { return this.LoginFormulario.get('email') }
  get contrasena() { return this.LoginFormulario.get('contrasena') }

  onSubmit() {    
    const val = this.LoginFormulario.value;
    console.log(val);
    if (val.email && val.contrasena) {
      this.authService.login(val.email, val.password);
      /*
        .subscribe(
          () => {
            console.log("User is logged in");
            //  this.router.navigateByUrl('/'); 
          }
        );
*/
    }
  }
}
