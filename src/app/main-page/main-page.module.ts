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
const routes: Routes = [
  {path: 'main-page', component: PageComponent}
]

@NgModule({
  declarations: [
    PageComponent,
    NavbarPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    PageComponent,
    RouterModule,
    NavbarPageComponent
  ]
})
export class MainPageModule {

}
