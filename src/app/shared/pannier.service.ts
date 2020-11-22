import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pannier } from '../model/pannier';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class PannierService {

  setPannier(p: Pannier): Observable<Pannier>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
   return this.http.post<Pannier>(baseURL+'panniers',p,httpOptions);
  }
  updatePannier (id: number, pannier: Pannier): Observable<Pannier> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.put<Pannier>(baseURL+'panniers/'+ id, pannier,httpOptions);
    }
  getPanniers(): Observable<Pannier[]>{
    return this.http.get<Pannier[]>(baseURL+'panniers');
  }
  getPannier(id: number):  Observable<Pannier>{
    return this.http.get<Pannier>(baseURL+'panniers/'+id);
  }
  getPannierByIdUser(idUser: number):  Observable<Pannier>{
    return this.http.get<Pannier>(baseURL+'panniers?idUser='+idUser);
  }

  constructor(private http: HttpClient) { }
}
