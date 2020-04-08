import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';
import { AlertifyService } from 'src/Services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService){}

  canActivate(): boolean  {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
  }
}
