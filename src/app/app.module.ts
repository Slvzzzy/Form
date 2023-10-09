import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,} from "@angular/forms";
import {AuthModule} from "./auth/auth.module";
import {MainPageModule} from "./main-page/main-page.module";
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Firebase main module
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule,
    MainPageModule,
    NgxChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Forma'),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
