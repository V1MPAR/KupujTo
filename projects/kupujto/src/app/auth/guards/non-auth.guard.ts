import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NonAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean {
    if (sessionStorage.getItem('user') !== null) {
      this.router.navigate(['/'])
        .then();
      return false;
    }
    return true;
  }
}
