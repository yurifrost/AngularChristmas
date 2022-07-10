import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          {path: 'login', component: LoginComponent}
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
