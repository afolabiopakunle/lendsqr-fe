import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
  }
}
