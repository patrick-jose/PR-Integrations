import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PullRequestsComponent } from './pullRequests/pullRequests.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { PullRequestsByRepoComponent } from './pullRequestsByRepo/pullRequestsByRepo.component';

const routes: Routes = [
  { path: '', component: PullRequestsComponent },
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'pullRequestsByRepo', component: PullRequestsByRepoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
