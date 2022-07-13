import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

// Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-icvoiao9.us.auth0.com',
      clientId: 'O95MLV3Bv9UimAajDfup4VxADntMPtRv'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
