import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'timer', component: TimerPageComponent },/* canActivate: [LoggedInGuardGuard] */
  { path: 'workbook', component: ViewEntriesComponent },/* canActivate: [LoggedInGuardGuard] */
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
