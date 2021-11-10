import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBar } from './navbar/navbar.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { TermsComponent } from './terms/terms.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmoduleComponent } from './submodule/submodule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    DashboardComponent,
    ModulesComponent,
    TermsComponent,
    SubmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
