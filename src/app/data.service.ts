import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get5Users() {
    return this.http.get('https://reqres.in/api/users?per_page=15');
  }
  get3Users() {
    return this.http.get('https://reqres.in/api/users?per_page=3');
  }
}
