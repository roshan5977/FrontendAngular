import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

const PROTOCOL = 'http';
const PORT = 8088;
const project='api/bankuser'

@Injectable()
export class RestDataSource {
  baseUrl: String;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/${project}/`;
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'getAllUser');
  }

  saveUser(user: User):Observable<User> {
   return this.http.post<User>(this.baseUrl+'saveUser',user);
  }

  getUser(id: number):Observable<User> {
    return this.http.post<User>(this.baseUrl+"getUser",id);
  }
}
