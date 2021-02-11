import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apikey = 'AIzaSyB0khdzEy44Jwo-Yrf87mHyzqRZ5ejIp8k';
  userToken: string;
  constructor( private http : HttpClient, private router : Router ) {
    this.readToken();
  }
  logout() {
    localStorage.removeItem('token');
  }
  login( user: User ) {
    const authData = {
      ...user,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        this.saveToken( resp['idToken'] );
        return resp;
      })
    );
  }
  private saveToken( tokenId: string ) {
    this.userToken = tokenId;
    localStorage.setItem('token', tokenId);
    let dateToken = new Date();
    dateToken.setSeconds( 12000 );
    localStorage.setItem('expires', dateToken.getTime().toString() );
  }
  readToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }
  isAuthenticated(): boolean {
    if ( this.userToken.length < 2 ) {
      this.router.navigate(['login']);
      return false;
    }
    const expires = Number(localStorage.getItem('expires'));
    const expiresDate = new Date();
    expiresDate.setTime(expires);
    if ( expiresDate > new Date() ) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
