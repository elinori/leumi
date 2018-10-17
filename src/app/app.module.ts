import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { HttpModule } from '@angular/http';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import {MatCardModule} from '@angular/material/card';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
const appRoutes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'suppliers',      component: SuppliersComponent },

  { path: 'add',      component:   AddsupplierComponent
},


  { path: 'suppliers',
    redirectTo: '/suppliers',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    DetailsComponent,
    AddsupplierComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
,
    MatDatepickerModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    HttpModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
