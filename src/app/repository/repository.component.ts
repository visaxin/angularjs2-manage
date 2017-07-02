import {Component, OnInit} from '@angular/core';
import {Repository} from '../hero';
import {RepositoryService} from './repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  providers: [RepositoryService]
})
export class RepositoryComponent implements OnInit {
  repo: Repository;

  selectedRepository: Repository;
  repos: Repository[];

  ngOnInit(): void {
    this.getRepositories();
  }

  constructor(private repositoryService: RepositoryService) {
  }

  getRepositories(): void {
    this.repositoryService.search('', '').subscribe(heroes => this.repos = heroes);
  }

  onSelect(hero: Repository): void {
    this.selectedRepository = hero;
  }
}
