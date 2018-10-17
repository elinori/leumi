import { Component } from '@angular/core';
import { HttpserviceService } from './httpservice.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="" ;
  haader=false;
 constructor( public service:HttpserviceService,private route:Router){
   this.route.navigate(['/suppliers'])
}
ex(event){
  this.service.getName()['name']=event
  this.haader=true;
}
}
