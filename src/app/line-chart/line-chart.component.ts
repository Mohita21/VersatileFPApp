import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {AppItemService} from '../app-item.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'red',
    },
  ];
  result;
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  arr = [];
  lab = [];
  flag = false;
  public lineChartLabels = [];
  public lineChartData = [
    {data: [], label: ''}
  ];

  constructor(private appItemService: AppItemService) { }

  ngOnInit(): void {
    this.appItemService.currentData.subscribe( message => this.result = message); console.log(this.result);
    console.log(this.result);
    for (let step = 0; step < this.result.result.length; step++){
      this.lab.push(step);
      // console.log((Object.values(this.convertedObj.result[step])[0]));
      this.arr.push((Object.values(this.result.result[step])[0])); }
    console.log(this.arr);
    this.lineChartData = [
      {data: this.arr, label: 'Value'}
    ];
    this.lineChartLabels = this.lab;
    this.flag = true;
  }
  // tslint:disable-next-line:typedef
  getchart() {

  }

}
