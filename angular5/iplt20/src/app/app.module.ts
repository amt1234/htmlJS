import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import{AppRoutingModule} from './app-routing.module'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataServiceService } from './data-service.service';
import { TeamInfoComponent } from './team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TeamInfoComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

