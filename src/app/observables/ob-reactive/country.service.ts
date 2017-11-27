import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {
  constructor(private http: Http){}
  getCountries(){
    return this.http.get('http://localhost:3002/countries')
      .map(res => res.json());
  }
  getCountry(name){
    return this.http.get(`http://localhost:3002/countries/${name.toLowerCase()}`)
      .map(res => res.json());
  }
}
