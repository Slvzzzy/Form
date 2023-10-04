import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-page-calendar.component',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  // @ts-ignore
  selected: Date | null;
}
