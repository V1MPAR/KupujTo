import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean {
    if (sessionStorage.getItem('user') !== null) {
      return true;
    }

    this.router.navigate(['/'])
      .then();
    return false;
  }
}
