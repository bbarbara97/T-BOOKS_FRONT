import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private authService: AuthService, public router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    console.log("saveToken: "+ token)
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.setRoles();
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) {
      return JSON.parse(user);
    }

    return {};
  }

  public setRoles() {
    const user = this.getUser().replace(/['"]+/g, '');

    this.authService.findRole(user).subscribe(
      data => {
        window.sessionStorage.removeItem(ROLES_KEY);
        window.sessionStorage.setItem(ROLES_KEY,JSON.stringify(data["role"]));
      },
      error => {
        console.log("Error");
      }
    );
  }

  public getRoles() {
    return window.sessionStorage.getItem(ROLES_KEY);
  }

}
