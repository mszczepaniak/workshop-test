import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MateService {


constructor(private http: Http) {}

getMates(): Promise<any> {
  return this.http.get('https://jsonplaceholder.typicode.com/users')
                  .toPromise()
                  .then(response => {
                    return response.json();
                    })
                  .catch(this.handleError);
}

getMate(mateId): Promise<any> {
  return this.http.get(`https://jsonplaceholder.typicode.com/users/${mateId}`)
                  .toPromise()
                  .then(response => {
                    return response.json();
                    })
                  .catch(this.handleError);
}

private handleError(error: any) {
  console.error('An error happened', error);
  return Promise.reject(error.message || error);
}
}
