import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(baseURL+'contacts');
  }
  getContact(id: number):  Observable<Contact>{
    return this.http.get<Contact>(baseURL+'products/'+id);
  }
  setProduct(c: Contact): Observable<Contact>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
   return this.http.post<Contact>(baseURL+'contacts',c,httpOptions);
  }

  constructor(private http: HttpClient) { }
}
