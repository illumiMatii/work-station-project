import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WorktimeComponent } from './worktime/worktime.component';
import { AbsenceComponent } from './absence/absence.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    WorktimeComponent,
    AbsenceComponent,
    AdminComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
