//This class defines the routes for the application
//These are the specific URLs to navigate to different pages
//Each route has a name and a component attached to it
//THis component will be rendered on navigation to that route

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { TermsComponent } from './terms/terms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SubmoduleComponent } from './submodule/submodule.component';


//Defining all the routes in path/component pairs
const routes: Routes = [
  { path: 'modules', component: ModulesComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'submodule/:module_id', component: SubmoduleComponent }
];
//Exporting routes and allowing them to be used by the app
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
