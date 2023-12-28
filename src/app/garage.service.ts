import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  readonly API_URL = 'http://localhost:8080';
  readonly ENDPOINT_CARS = '/Car';

  constructor(private httpClient: HttpClient) {} // Correct type: HttpClient, not _HttpClient

  // Example method to get data from the API
  getCars(): Observable<any> {

    return this.httpClient.get(this.API_URL+this.ENDPOINT_CARS);
  }
}
