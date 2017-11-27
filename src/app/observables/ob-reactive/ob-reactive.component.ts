import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CountryService } from './country.service';
import { ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ob-reactive',
  templateUrl: './ob-reactive.component.html',
  styleUrls: ['./ob-reactive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObReactiveComponent implements OnInit {

  countries;
  activeCountry;
  activeCountryData;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countries = this.countryService.getCountries();
    this.activeCountry = new ReplaySubject(null);
    this.activeCountryData = this.activeCountry
      .map(country => country.name)
      .switchMap(name => this.countryService.getCountry(name))
  }

}
