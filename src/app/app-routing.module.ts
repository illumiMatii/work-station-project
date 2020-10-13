import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WorktimeComponent } from './worktime/worktime.component';
import { AbsenceComponent } from './absence/absence.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: ':username',
    component: UserComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'work-time',
        component: WorktimeComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'absence',
        component: AbsenceComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
