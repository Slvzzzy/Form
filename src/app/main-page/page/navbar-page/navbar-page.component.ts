import { Component } from '@angular/core';
import { navBarDate} from "./navbardata";

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent {
  navBarDate = navBarDate;
}
