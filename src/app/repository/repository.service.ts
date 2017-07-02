import {Injectable} from '@angular/core';
import {Repository, RepositoryList} from '../hero';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RepositoryService {
  private repoUrl = `/${APIVersion}/admin/user/repos`;

  constructor(private http: Http) {
  }

  create(repo: Repository): Observable<Repository> {
    return this.http.post(this.repoUrl, JSON.stringify(repo)).map(this.extractRepository).catch(this.handleError)
  }

  update(repo: Repository): Observable<Repository> {
    return this.http.put(this.repoUrl, JSON.stringify(repo)).map(this.extractRepository).catch(this.handleError)
  }

  search(size: string, from: string): Observable<Repository[]> {
    const params = new URLSearchParams();
    params.set('size', size ? size : '10');
    params.set('from', from ? from : '0');
    return this.http.get(this.repoUrl, {params: params}).map(this.extractRepository).catch(this.handleError)
  }

  // get repositoryList by appid
  searchWithAppId(appId: string): Observable<RepositoryList> {
    const params = new URLSearchParams();
    params.set('appId', appId);
    return this.http.get(this.repoUrl, {params: params})
      .map(this.extractRepository)
      .catch(this.handleError);
  }

  // get repo by repoName
  searchWithRepoName(repoName: string): Observable<RepositoryList> {
    // const url = '/${APIVersion}/admin/user/repositoryList';
    const params = new URLSearchParams();
    params.set('repoName', repoName);
    return this.http.get(this.repoUrl, {params: params})
      .map(this.extractRepository)
      .catch(this.handleError);
  }

  delete(appId: string, repoName: string): Observable<Object> {
    const params = new URLSearchParams();
    params.set('appId', appId);
    params.set('repoName', repoName);

    return this.http.delete(this.repoUrl, {params: params})
      .map(this.extractRepository)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || {}
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''}  ${err}`
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg)
  }

  private extractRepository(res: Response) {
    return res.json()
  }

}
export const APIVersion = 'v5';




