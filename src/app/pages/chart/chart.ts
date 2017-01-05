import { Component } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.html',
  styleUrls: ['./chart.scss']
})
export class Chart {
  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: '小 明' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: '小 张' }
  ];
  public radarChartType: string = 'radar';

  // Pie
  public pieChartLabels: string[] = [ 'Android', 'IOS'];
  public pieChartData: number[] = [300, 100];
  public pieChartType: string = 'pie';

}