import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})

export class RepositoriesComponent implements OnInit {

  fiveUsers: object;
  threeUsers: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.get5Users().subscribe(data => {
      this.fiveUsers = data;
    });
    this.data.get3Users().subscribe(data => {
      this.threeUsers = data;
    });
  }

  clickRepo(repo: string) {
    this.data.sendChosenRepo(repo);
  }
}
