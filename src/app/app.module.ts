import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { EmployeecrudRoutingModule } from './Employee/employee/EmployeeRouting/employeecrud/employeecrud-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeecrudRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
