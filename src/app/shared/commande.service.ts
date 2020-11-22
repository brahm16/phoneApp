import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../model/commande';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  getCommandes(): Observable<Commande[]>{
    return this.http.get<Commande[]>(baseURL+'commandes');
  }
  getCommandesByUser(idUser: number): Observable<Commande[]>{
    return this.http.get<Commande[]>(baseURL+'commandes?idUser'+idUser);
  }
  getCommande(id: number):  Observable<Commande>{
    return this.http.get<Commande>(baseURL+'commandes/'+id);
  }
  setCommande(c: Commande): Observable<Commande>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
   return this.http.post<Commande>(baseURL+'commandes',c,httpOptions);
  }



  constructor(private http: HttpClient) { }
}
