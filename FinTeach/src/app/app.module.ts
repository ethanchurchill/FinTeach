//This is the foundation file for the application. 
//It declares all the components that will be rendered by the application
//It also defines external imports utilized by our application
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

//Defines the NgModule which is established on application runtime
//This is required for all Angular applications
@NgModule({
    //Declare each of the components that need to be rendered
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
    //Define external imports from bootstrap and others
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
    //This is the base component that the app will run on. 
  bootstrap: [AppComponent]
})
export class AppModule { }
