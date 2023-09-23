import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { BaseApiService } from '../shared/services/base-api.service';

export interface LoginModelDomainGet {
  uuid: string;
  username: string;
  userFullName: string;
  userId: number;
  ipAddress: string;
  hotelId: number;
  hotelGroupId: number;
  authorities: [
    {
      authority: string;
    }
  ],
  permissions: [
    {
      hotelId: number;
      permissions: string[];
    }
  ]
}

export interface LoginModelDomainPost {
  user: string;
  password: string;
  hotelCode: number;
}

export interface RegisterModelDomainGet {
}

export interface RegisterModelDomainPost {
  name: string,
  phoneNumber: string,
  email: string,
  address: {
    street: string,
    houseNumber: string,
    flatNumber: string,
    city: string,
    zipCode: string,
    country: string
  },
  adminPassword: string,
  nip: string,
  roomNumber: number,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseApiService {
  constructor(
    protected override http: HttpClient
  ) {
    super(http);
  }

  public login(payload: LoginModelDomainPost): Observable<LoginModelDomainGet> {
    return this.post('/users/login', payload).pipe(
      map((response: LoginModelDomainGet): LoginModelDomainGet => response)
    );
  }

  public register(payload: RegisterModelDomainPost): Observable<RegisterModelDomainGet> {
    return this.post('/hotels/registration', payload).pipe(
      map((response: RegisterModelDomainGet): RegisterModelDomainGet => response)
    );
  }

  public changeToken(access: string): void {
    if (access) {
      sessionStorage.setItem('access', access);
    }
  }
}
