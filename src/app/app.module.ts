import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {RepositoryComponent} from './repository/repository.component';
import {DashboardComponent} from './dashboard.component';
import {RepositoryService} from './repository/repository.service';
import {AppRoutingModule} from './app.routing.moudle';
import {NavTopComponent} from './navtop.component';
import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    DashboardComponent,
    HeroDetailComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent],
})

export class AppModule {

}
