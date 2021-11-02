import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBar } from './navbar/navbar.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    DashboardComponent,
    ModulesComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
