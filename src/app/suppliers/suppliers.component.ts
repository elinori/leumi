import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';
import { Supplier } from '../supplier';
import { AddsupplierComponent } from '../addsupplier/addsupplier.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[] = [];
  temp: any;
  f = false;
  id: string[] = [];
  @Output()
  c: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: HttpserviceService, private route: Router) {
         this.f=false
    service.getsuppliers().subscribe(x => {
      this.suppliers = x
      this.temp=this.suppliers;
      this.suppliers.push(this.service.getName());

      for (let index = 0; index < this.suppliers.length; index++) {
        const element = this.service.getName()['id'];
        this.id.push(this.suppliers[index]['id']);
        if (this.suppliers[index]['id'] === element) {
          this.suppliers[index]['adress'] = this.service.getName()['adress'];
          this.suppliers[index]['email'] = this.service.getName()['email'];
          this.suppliers[index]['name'] = this.service.getName()['name'];
          this.suppliers[index] = this.service.getName();
        }


      }

    }
    );
  }

  ex(event) {
    this.f=!this.f;
    this.suppliers.push(event);
  }
  setClickedRow(s) {
    this.f=true;
    this.c.emit(s['name'])
    this.service.setname(s);
    this.route.navigate(['/details']);


  }
  search(t) {
    t=t.toLowerCase();

    if (t === "") {
      this.suppliers = this.temp;
    }

    else {
      this.suppliers = this.suppliers.filter(it =>
        (it.name.toLowerCase().includes(t))

      )

    }

  }
  add() {
    this.f = true;
    this.service.setname(null);
    this.route.navigate(['/add']);
  }
  ngOnInit() {

  }

}
