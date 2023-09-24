import { Component,} from '@angular/core';

import { single } from './data-circle';
import {Color} from "@swimlane/ngx-charts";
import {ScaleType} from "@swimlane/ngx-charts/lib/common/types/scale-type.enum";

@Component({
  selector: 'app-dashboard-circle',
  templateUrl: './dashboard-circle.html',
  styleUrls: ['./dashboard-circle.css']
})
export class DashboardCircle {
  single: any[] | undefined;
  view: [number, number] = [850, 700];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  animations: boolean = true

  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
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

  protected readonly JSON = JSON;
}
