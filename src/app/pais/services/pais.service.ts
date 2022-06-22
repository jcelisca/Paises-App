import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields','name,capital,flags,population,cioc');
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<Pais[]>{
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Pais[]>( url, {params: this.httpParams} );
  }

  buscarCapital( termino: string): Observable<Pais[]>{
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Pais[]>( url, {params: this.httpParams} );
  }

  getPaisById( id: string): Observable<Pais>{
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Pais>( url );
  }
  buscarPorRegion(region: string): Observable<Pais[]>{
    const url = `${this.apiURL}/region/${region}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

}
