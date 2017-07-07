import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {RepositoryComponent} from './repository/repository.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:appId/:repoName', component: HeroDetailComponent},
  {path: 'repositoryList', component: RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
