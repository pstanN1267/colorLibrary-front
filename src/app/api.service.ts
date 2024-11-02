import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paint } from './models';

const BASE_URL = 'http://localhost:8080'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly httpClient = inject(HttpClient);


  getUserPaints(): Observable<Paint[]> {
    return this.httpClient.get<Paint[]>(`${BASE_URL}/userpaints`);
  }


  addPaint(paint: Paint): Observable<Paint> {
    const params = new HttpParams()
      .set('brand', paint.brand)
      .set('range', paint.range)
      .set('name', paint.name)

    return this.httpClient.post<Paint>(`${BASE_URL}/copy`, null, {params});
  }

  deleteRow(id: number): Observable<any> {
    return this.httpClient.delete(`${BASE_URL}/delete/${id}`);
  }
}
