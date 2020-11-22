import { Component, Inject, Input, OnInit } from '@angular/core';
import { Phone } from '../model/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input() phone: Phone;

  constructor(@Inject("baseURL") public baseURL) { }

  ngOnInit(): void {
    console.log(this.baseURL)
  }

}
