import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ShipmentComponent } from './Shipment/Shipment.component';
import { ContractComponent } from './Contract/Contract.component';
import { ShipperComponent } from './shipper/shipper.component';
import { GrowerComponent } from './grower/grower.component';
import { ImporterComponent } from './importer/importer.component';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    ShipmentComponent,
    ContractComponent,
    ShipperComponent,
    GrowerComponent,
    ImporterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
