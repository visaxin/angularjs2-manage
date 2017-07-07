/**
 * Created by jason on 6/30/17.
 */
import {
  Component,
  Input, OnChanges,
} from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormGroup, Validators
} from '@angular/forms';

import {
  ProducerInfo, Repository, SchemaObject,
} from './hero';
import {
  ActivatedRoute,
  ParamMap
} from '@angular/router'
import {RepositoryService} from './repository/repository.service';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import {forEach} from '@angular/router/src/utils/collection';

@Component(
  {
    selector: 'app-hero-detail',
    templateUrl: `./hero-detail.component.html`
  }
)

export class HeroDetailComponent implements OnChanges {
  @Input() repo: Repository;
  repoForm: FormGroup;

  constructor(private repositoryService: RepositoryService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) {
    this.createForm();
  }


  createForm(): void {
    this.repoForm = this.fb.group(
      {
        appID: ['', Validators.required],
        repoName: '',
        region: '',
        retention: '',
        capacity: 1,
        schema: this.fb.array([]),
        createTime: '',
        updateTime: '',
        producerInfo: this.fb.group(new ProducerInfo()),
        status: 0,
        indexVersion: '',
        templateVersion: '',
        replica: 0,
        primaryField: ''
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

  ngOnChanges(): void {
    this.repoForm.reset(this.repo);
    this.setSchema(this.repo.schema);
  }

  setSchema(schemas: SchemaObject[]) {
    schemas.map(s => {
      console.log(s.analyzer)
        if (s.analyzer === undefined) {
          s.analyzer = ''
        }
        if (s.options === undefined) {
          s.options = {}
        }
        if (s.primary === undefined) {
          s.primary = false;
        }
      }
    )
    const schemaFGs = schemas.map(ss => this.fb.group(ss));
    const schemaFormArray = this.fb.array(schemaFGs);
    this.repoForm.setControl('schema', schemaFormArray);
  }


  prepareSaveHero(): Repository {
    const formModel = this.repoForm.value;
    // deep copy of form model lairs
    // const secretLairsDeepCopy: SchemaObject[] = formModel.secretLairs.map(
    //   (address: SchemaObject) => Object.assign({}, address)
    // );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    // const sDeepCopy: SchemaObject[] = formModel.schema.map(
    //   (address: SchemaObject) => Object.assign({}, address)
    // );
    const saveRepository: Repository = formModel;
    // saveRepository.schema = sDeepCopy;
    return saveRepository;
  }

  revert(): void {
    this.ngOnChanges();
  }

  get schemaObjects(): FormArray {
    return this.repoForm.get('schema') as FormArray;
  };

  addSchema(): void {
    this.schemaObjects.push(this.fb.group(new SchemaObject()));
  }

  onSubmit(): void {
    this.repo = this.prepareSaveHero();
    this.repositoryService.update(this.repo).subscribe(r => this.repo = r)
    this.ngOnChanges();
  }

  save(): void {
    this.repositoryService.update(this.repo).subscribe(r => this.repo = r)
  }

}
