import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { city, country, state } from '../model/filter.model';

@Injectable()
export class ServicesService {
  public baseUrl: string
  constructor(private HttpServices: HttpClient) {
    this.baseUrl = environment.baseUrl
  }
  getCountries(): Observable<country[]> {
    return this.HttpServices.get<country[]>(`${this.baseUrl}/country`)
  }
  getStates(): Observable<state[]> {
    return this.HttpServices.get<state[]>(`${this.baseUrl}/state`)
  }
  getCity(): Observable<city[]> {
    return this.HttpServices.get<city[]>(`${this.baseUrl}/city`)
  }
}
