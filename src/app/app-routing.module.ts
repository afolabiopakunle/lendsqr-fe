import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GurantorsComponent } from './pages/gurantors/gurantors.component';
import { LoansComponent } from './pages/loans/loans.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
