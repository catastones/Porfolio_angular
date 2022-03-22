import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioDataService {

  constructor(private http: HttpClient) { }
  serviceprofoliook(): void {
    console.log("servicio ok");
  }
  obtenerDataJson(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }


}
