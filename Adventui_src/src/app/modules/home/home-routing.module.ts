import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HomeComponent } from './home.component';
import { AccountpayableComponent } from './accountpayable/accountpayable.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    { path: '', redirectTo: 'home/reports', pathMatch: 'full' },
    { path: 'dashboard', component: ReportsComponent },
    { path: 'graphs', component: GraphsComponent },
    { path: 'accountpayable', component: AccountpayableComponent },
    { path: 'reports', component: ReportsComponent }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
