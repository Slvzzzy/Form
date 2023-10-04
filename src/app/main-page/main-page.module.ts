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
import {DashboardCircle} from "./page/dashboard/dashboard-circle.component/dashboard-circle";
import {LineChartModule, PieChartModule} from "@swimlane/ngx-charts";
import {DashboardGrafic} from "./page/dashboard/dashboard-grafic.component/dashboard-grafic";
import {CalendarComponent} from "./page/navbar-page/calendar.component/calendar.component";
import {MessageComponent} from "./page/navbar-page/message.component/message.component";
import {CandidatesComponent} from "./page/navbar-page/candidates.component/candidates.component";
import {CareerSiteComponent} from "./page/navbar-page/careerSite.component/careerSite.component";
import {JobsComponent} from "./page/navbar-page/jobs.component/jobs.component";
import {MyReferalsComponent} from "./page/navbar-page/myReferals.component/myReferals.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from '@angular/material/core';
const routes: Routes = [
  {path: 'dashboard', component: PageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'message', component: MessageComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'my referals', component: MyReferalsComponent},
  {path: 'candidates', component: CandidatesComponent},
  {path: 'career site', component: CareerSiteComponent},

]

@NgModule({
  declarations: [
    PageComponent,
    NavbarPageComponent,
    DashboardComponent,
    AccountComponent,
    DashboardCircle,
    DashboardGrafic,
    CalendarComponent,
    MessageComponent,
    CandidatesComponent,
    CareerSiteComponent,
    JobsComponent,
    MyReferalsComponent
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
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule
  ],
  exports: [
    PageComponent,
    RouterModule,
    NavbarPageComponent,
  ]
})
export class MainPageModule {

}
