/**
 * Created by jason on 6/30/17.
 */
import {Component, Input, OnInit} from '@angular/core'
import {Repository} from './hero';
import {ActivatedRoute, ParamMap} from '@angular/router'
import {RepositoryService} from './repository/repository.service';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';

@Component(
  {
    selector: 'app-hero-detail',
    template: `
      <!--<div *ngIf="hero">-->
      <!--<h2>{{hero.name}} details!</h2>-->
      <!--<div><label>id: </label>{{hero.id}}</div>-->
      <!--<div>-->
      <!--<label>name: </label>-->
      <!--<input [(ngModel)]="hero.name" placeholder="name"/>-->
      <!--</div>-->
      <!--</div>-->
      <!--<button (click)="goBack()">Back</button>-->
    `
  }
)

export class HeroDetailComponent implements OnInit {
  @Input() repo: Observable<Repository>;

  ngOnInit(): void {
    // this.route.paramMap.switchMap(
    //   (params: ParamMap) => this.repositoryService.searchWithAppId(+params.get('id'))
    // ).subscribe(repo => this.repo)
  }


  constructor(private repositoryService: RepositoryService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }

}
