/**
 *  Reusable Data Service
 */

import { BadRequestError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { NotFoundError } from '../common/not-found-error';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) {
    // made http private for other methods to access it
   }

   getAll() {
      return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
   }

   create(resource) {
      // to simulate the error use commented return stmt
      // return Observable.throw(new AppError());
      return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.handleError);
   }

   update(resource) {
     return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
        .map(response => response.json())
        .catch(this.handleError);
   }

   delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
   }

  //  Reusable Error handler method

  private handleError(error: Response) {
    if (error.status === 404) {
      // more specific error
      return Observable.throw(new NotFoundError(error.json()));
    }
    if (error.status === 400) {
      // Bad Input Request
      return Observable.throw(new BadRequestError(error.json()));
    }
    // returning the different type of error which is Application specific
    return Observable.throw(new AppError(error));
  }

}
