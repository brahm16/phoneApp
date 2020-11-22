import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Phone } from '../model/phone';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  static phone:Phone;
  p: BehaviorSubject<Phone>;

  getPhone(): Phone{
    return PhoneService.phone;
  }
  setPhone(phone: Phone){
    PhoneService.phone=phone;
  } 

  getPhones(): Observable<Phone[]>{
    return this.http.get<Phone[]>(baseURL+'phones');
  }
  getPhoneById(id: string):  Observable<Phone>{
    return this.http.get<Phone>(baseURL+'phones/'+id);
  }
  nextPhone(phone: Phone){
    this.p.next(phone);
  }

  constructor(private http: HttpClient ) { 
    this.p=new BehaviorSubject(this.getPhone());

  }
}
