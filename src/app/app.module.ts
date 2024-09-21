import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TimerComponent } from './timer/timer.component';
import { CtaComponent } from './cta/cta.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TimerComponent,
    CtaComponent,
    TimerPageComponent,
    ViewEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
