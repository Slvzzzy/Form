import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PageComponent} from "./page/page.component";
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from '@angular/material/icon'
import {NavbarPageComponent} from "./page/navbar-page/navbar-page.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AccountComponent } from './page/account/account.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import {DashboardCircle} from "./page/dashboard/dashboard-circle/dashboard-circle";
import {LineChartModule, PieChartModule} from "@swimlane/ngx-charts";
import {DashboardGrafic} from "./page/dashboard/dashboard-grafic/dashboard-grafic";
import {Calendar} from "./page/navbar-page/Calendar/Calendar";
import {Message} from "./page/navbar-page/Message/Message";

const routes: Routes = [
  {path: 'dashboard', component: PageComponent},
  {path: 'dashboard/Calendar', component: Calendar},
  {path: 'dashboard/Message', component: Message},
]

@NgModule({
  declarations: [
    PageComponent,
    NavbarPageComponent,
    DashboardComponent,
    AccountComponent,
    DashboardCircle,
    DashboardGrafic,
    Calendar,
    Message
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    PieChartModule,
    LineChartModule,

  ],
  exports: [
    PageComponent,
    RouterModule,
    NavbarPageComponent,
  ]
})
export class MainPageModule {

}
