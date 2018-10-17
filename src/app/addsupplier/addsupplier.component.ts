import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {
  profileForm: FormGroup
  @Output()
  b: EventEmitter<any> = new EventEmitter<any>()

  constructor(private service: HttpserviceService, private fb: FormBuilder, private route: Router) { this.creteForm(); }

  ngOnInit() {
  }
  creteForm() {
    this.profileForm = this.fb.group({
      adress: [],
      id: [],
      services: [],
      phone: [],
      email: [],
      name: []


    });
  }
  add(p) {

    this.service.setname(p.value)
    this.b.emit(p.value);
    this.route.navigate(['./suppliers'])
  }
}
