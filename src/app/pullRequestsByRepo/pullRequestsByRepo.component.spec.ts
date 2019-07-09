import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsByRepoComponent } from './pullRequestsByRepo.component';

describe('PullRequestsByRepoComponent', () => {
  let component: PullRequestsByRepoComponent;
  let fixture: ComponentFixture<PullRequestsByRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRequestsByRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsByRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
