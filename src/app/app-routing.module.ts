import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GurantorsComponent } from './components/gurantors/gurantors.component';
import { LoansComponent } from './components/loans/loans.component';

const routes: Routes = [
  { path: '',  redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'guarantors', component: GurantorsComponent },
  { path: 'loans', component: LoansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
