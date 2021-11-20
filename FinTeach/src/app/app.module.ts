import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBar } from './navbar/navbar.component'
import { ModuleBlock } from 'src/app/moduleblock/moduleblock.component';
import { ModuleGallery } from 'src/app/modulegallery/modulegallery.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SubmoduleComponent } from './submodule/submodule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    ModuleBlock,
    ModuleGallery,
    DashboardComponent,
    ModulesComponent,
    TermsComponent,
    LoginComponent,
    SubmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
