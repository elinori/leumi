import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from '../../node_modules/rxjs';
import { element } from '../../node_modules/@angular/core/src/render3/instructions';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
 supplier:Supplier;
 x:any;
 c:EventEmitter<any>=new EventEmitter<any>();

  constructor(private http: Http) { }
  getsuppliers(): Observable<any> {
    return this.http.get('assets/Suppliers.json').pipe(
      map(x =>x.json()['suplires']

      )
    )
  }
  setSup(n){
this.x=n;


  }
  getSup(){
    return this.x;
  }
  setname(s){
    this.supplier= s;

  }
  addSup(n){

  }
  getName(){
    console.log("vcvcv"+this.supplier)
    this.c.emit(this.supplier)
    return this.supplier;
  }
  getneewSupp(){
    return this.supplier;
  }


}
