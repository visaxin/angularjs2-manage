/**
 * Created by jason on 6/30/17.
 */
import {
  Component,
  Input,
  OnInit
} from '@angular/core'
import {Repository} from './hero';
import {
  ActivatedRoute,
  ParamMap
} from '@angular/router'
import {RepositoryService} from './repository/repository.service';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';

@Component(
  {
    selector: 'app-hero-detail',
    template: `
      <div>
        <div class="form-group col-md-5">
          <label for="comment">Json
            Format:</label>
          <textarea class="form-control" rows="60"
                    #repoJson
                    id="comment">{{repo | json}}</textarea>
          <button
            (click)="update(repoJson.value)"
            class="btn btn-default">提交修改
          </button>
        </div>
        <button class="btn btn-default"
                (click)="goBack()">Back
        </button>
        <button
          (click)="update(repoJson.value)"
          class="btn btn-default">提交修改
        </button>
      </div>

    `
  }
)

export class HeroDetailComponent implements OnInit {
  @Input() repo: Repository;

  ngOnInit(): void {
    this.route.paramMap.switchMap(
      (params: ParamMap) => this.repositoryService.searchWithAppIdRepoName(params.get('appId'), params.get('repoName'))
    ).subscribe(repo => this.repo = repo.pop())
  }


  constructor(private repositoryService: RepositoryService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }

  update(repoJson: string): void {
    const repo = JSON.parse(repoJson);
    console.log(repo);
    this.repositoryService.update(repo).subscribe(r => this.repo = r)
  }

}
