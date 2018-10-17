import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  theChoosernSupplier: Supplier;
  profileForm: FormGroup

  flage = false;
  constructor(private service: HttpserviceService, private fb: FormBuilder, private route: Router) {
    this.theChoosernSupplier = this.service.getName();
    this.creteForm();

  }
  edite() {
    this.flage = !this.flage;
  }
  creteForm() {
    this.profileForm = this.fb.group({
      adress: [this.theChoosernSupplier.adress],
      id: [this.theChoosernSupplier.id],
      services: [this.theChoosernSupplier.service],
      phone: [this.theChoosernSupplier.phone],
      email: [this.theChoosernSupplier.email],
      name:[this.theChoosernSupplier.name]

    });

  }


  save(p) {
    this.service.setname(p.value);
    this.route.navigate(['/suppliers']);

  }
  ngOnInit() {
  }

}
