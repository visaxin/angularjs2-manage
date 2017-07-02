/**
 * Created by jason on 6/30/17.
 */

import {Component} from '@angular/core';

@Component(
  {
    selector: 'app-root',
    template: `
      <div class="container">
        <app-nav-top></app-nav-top>
        <router-outlet></router-outlet>
      </div>
    `
  }
)

export class AppComponent {

}
