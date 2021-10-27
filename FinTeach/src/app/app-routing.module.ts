import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: 'modules', component: ModulesComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
