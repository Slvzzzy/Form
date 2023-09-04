import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {SignInComponent} from "./sign-in/sign-in.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'sign-in',  component: SignInComponent},
  {path: 'registration', component: SignUpComponent},
  {path: '', redirectTo:'/sign-in', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    RouterModule,

  ]
})
export class AuthModule {

}
