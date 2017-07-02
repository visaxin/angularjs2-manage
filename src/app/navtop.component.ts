import {Component, OnInit} from '@angular/core';
import {RepositoryService} from './repository/repository.service';
/**
 * Created by jason on 7/1/17.
 */

@Component({
    selector: 'app-nav-top',
    templateUrl: './nav-top.component.html'
  }
)

export class NavTopComponent implements OnInit {
  title = 'LogDBV1.0';

  ngOnInit(): void {
  }
}
