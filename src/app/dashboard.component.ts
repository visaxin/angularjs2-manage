/**
 * Created by jason on 6/30/17.
 */

import {Component, OnInit} from '@angular/core';
import {Repository, RepositoryList} from './hero';
import {RepositoryService} from './repository/repository.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-my-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: [`./repository/repository.component.css`]
})

export class DashboardComponent implements OnInit {
  repositoryList: Observable<RepositoryList>;
  repos: Repository[];
  selectedRepo: Observable<Repository>;
  private repoNameStream = new Subject<string>();
  private repoAppIdStream = new Subject<string>();


  constructor(private repositoryService: RepositoryService) {
  }


  ngOnInit(): void {
    this.repositoryList = this.repoNameStream.debounceTime(300).distinctUntilChanged().switchMap((repo: string) => this.repositoryService.searchWithRepoName(repo))
    this.repositoryList.subscribe(l => this.repos = l.repo_list);
    this.repoAppIdStream.debounceTime(300).distinctUntilChanged().switchMap((appId: string) => this.repositoryService.searchWithAppId(appId))
  }

  searchRepoWithRepoName(repoName: string) {
    this.repoNameStream.next(repoName)
  }

  searchRepoWithAppId(appId: string) {
    this.repoAppIdStream.next(appId)
  }

  deleteCurrentRepo(appId: string, repoName: string) {
    this.repositoryService.delete(appId, repoName)
  }

  updateCurrentRepo() {

  }
}

