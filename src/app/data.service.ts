import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PullRequestsByRepoComponent } from './pullRequestsByRepo/pullRequestsByRepo.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  repo: string;

  constructor(private http: HttpClient) { }

  sendChosenRepo(repo: string) {
    this.repo = repo;
  }

  receiveChosenRepo() {
    return this.repo;
  }

  get5Users() {
    return this.http.get('https://reqres.in/api/users?per_page=15');
  }
  get3Users() {
    return this.http.get('https://reqres.in/api/users?per_page=3');
  }
}
