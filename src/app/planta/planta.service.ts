import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from './planta';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class PlantaService {

    private apiUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) { }
  
    getPlantas(): Observable<Planta[]> {
      return this.http.get<Planta[]>(this.apiUrl);
    }

}
