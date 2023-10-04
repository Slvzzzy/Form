import { Component, } from '@angular/core';
import { multi } from './cointries-data-grafic';

@Component({
  selector: 'app-dashboard-grafic',
  templateUrl: './dashboard-grafic.html',
})
export class DashboardGrafic {
  multi: any[] | undefined;
  view: [number, number] = [850, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
// @ts-ignore
  colorScheme: string = {
    domain: ['#1bf009', '#d13007', '#e35a2d', '#0e56cb', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect({data}: { data: any }): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate({data}: { data: any }): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate({data}: { data: any }): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
