import { Component, OnInit } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import {AppItemService} from '../app-item.service';

@Component({
  selector: 'app-line-chart3',
  templateUrl: './line-chart3.component.html',
  styleUrls: ['./line-chart3.component.css']
})
export class LineChart3Component implements OnInit {

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'red',
    },
  ];
  result;
  listy = [];
  lab = [];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  message;
  arr = [];
  flag = false;
  public lineChartLabels = [];
  public lineChartData = [
    {data: [], label: ''}
  ];

  constructor(private appItemService: AppItemService ) { }


  ngOnInit(): void {
    this.appItemService.currentData.subscribe( message => this.result = message); console.log(this.result);

    console.log(this.result);
    const l = this.result.result.length;
    for ( let i = 0; i < l; i = i + 1)  {
      this.lab.push(this.result.dates[i]);
      console.log(this.result.result[i]);
      this.listy.push(this.result.result[i]);
    }
    console.log(this.listy);
    this.lineChartData = [
      {data: this.listy, label: 'Value'}
    ];
    this.lineChartLabels = this.lab;
    this.flag = true;
  }

  // tslint:disable-next-line:typedef
  getchart() {

  }
}
