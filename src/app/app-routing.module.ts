import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WorktimeComponent } from './worktime/worktime.component';
import { AbsenceComponent } from './absence/absence.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: ':username',
    component: UserComponent,
    children: [
      { path: 'work-time', component: WorktimeComponent },
      { path: 'absence', component: AbsenceComponent },
    ],
  },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
