import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor (
    private http: Http
  ) {}
  getData(json) {

    return this.http.get(json)
    .map((res:Response) => res.json());


  }



  

}