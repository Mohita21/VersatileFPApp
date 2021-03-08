import { Component, OnInit } from '@angular/core';
import {AppItemService} from '../app-item.service';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  constructor(private appItemService: AppItemService ) { }
  result;
  listy = [];
  lab = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  flag = false;
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: ''}
  ];

// tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appItemService.currentData.subscribe( message => this.result = message); console.log(this.result);


  }

  // tslint:disable-next-line:typedef
  getchart() {
    console.log(this.result);
    const l = this.result.result.length;
    for ( let i = 0; i < l; i = i + 1)  {
      this.lab.push(this.result.dates[i]);
      console.log(this.result.result[i]);
      this.listy.push(this.result.result[i]);
    }
    console.log(this.listy);
    this.barChartData = [
      {data: this.listy, label: 'Value'}
    ];
    this.barChartLabels = this.lab;
    this.flag = true;
  }
}
