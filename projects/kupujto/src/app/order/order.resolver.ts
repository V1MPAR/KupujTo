import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';

import { Store } from '@ngxs/store';

import { Observable, of } from 'rxjs';

@Injectable()
export class OrderResolver implements Resolve<boolean> {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  public resolve(): Observable<boolean> {
    // if (!this.router.url.endsWith('welcome')) {
    //   console.log('resolve');
    //   this.store.dispatch([
    //     new AuthActions.LoadUser(),
    //   ]);
    // }

    return of(true);
  }
}
