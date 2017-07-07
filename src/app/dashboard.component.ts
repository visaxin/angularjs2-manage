/**
 * Created by jason on 6/30/17.
 */

import {Component, OnInit} from '@angular/core';
import {Repository} from './hero';
import {RepositoryService} from './repository/repository.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-my-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: [`./repository/repository.component.css`]
})

export class DashboardComponent implements OnInit {
  repositoryList: Observable<Repository[]> = Observable.of<Repository[]>([]);
  showDelete = false;
  private repoNameStream = new Subject<string>();


  constructor(private repositoryService: RepositoryService) {
  }


  searchRepoWithRepoName(repoName: string) {
    this.repoNameStream.next(repoName)
  }

  search(appId: string, repoName: string): void {
    if (appId === '') {
      this.repositoryList = this.repositoryService.searchWithRepoName(repoName);
      return
    }
    if (repoName === '') {
      this.repositoryList = this.repositoryService.searchWithAppId(appId);
      return
    }
    this.repositoryList = this.repositoryService.searchWithAppIdRepoName(appId, repoName).catch(error => {
      console.log(error);
      return Observable.of<Repository[]>([]);
    });
  }

  deleteRepo(appId: string, repoName: string) {
    if (appId === '' || repoName === '') {
      return
    }
    this.repositoryService.delete(appId, repoName).subscribe();
    this.showDelete = !this.showDelete;
  }

  ngOnInit(): void {
    this.repositoryList = this.repoNameStream
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.repositoryService.searchWithRepoName(term) : Observable.of<Repository[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Repository>();
      });
  }

  deleteButton(): void {
    this.showDelete = !this.showDelete
  }
}

