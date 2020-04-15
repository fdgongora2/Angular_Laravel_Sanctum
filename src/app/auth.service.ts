import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, share, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) {
  }
    
  login(email:string , password:string ) {

    console.log('Entra en login');
      this.http.get<any>('http://www.iesmurgi.org:86/~fdgongora/REST-API/public/sanctum/csrf-cookie').subscribe((response) => {
        console.log("La respuesta es: ",response)
      });
     /* return this.http.post<any>('http://www.iesmurgi.org/~fdgongora/REST-API/login', {email, password}).pipe(
          // this is just the HTTP call, 
          // we still need to handle the reception of the token
          shareReplay());

          */
  }
}
