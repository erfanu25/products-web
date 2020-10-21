import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/v1/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUser(): Observable<any> {
    return this.http.get(API_URL + 'get/all');
  }

  update(user): Observable<any> {
    return this.http.put(API_URL + 'update/' + user.id, {
      username: user.username,
      email: user.email,
      password: user.password,
      role: [user.role]
    }, httpOptions);
  }

}
