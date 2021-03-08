import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { SimcheckComponent } from './simcheck/simcheck.component';
import { ForecastComponent } from './forecast/forecast.component';
import {routing} from './app.routing';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';
import { ReactiveFormsModule} from '@angular/forms';
// @ts-ignore
import {ChartsModule} from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChart2Component } from './line-chart2/line-chart2.component';
import {ProgressBarModule} from 'angular-progress-bar';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    SimcheckComponent,
    ForecastComponent,
    MyBarChartComponent,
    LineChartComponent,
    LineChart2Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    RouterModule,
    HttpClientModule,
    NgxCSVtoJSONModule,
    ChartsModule,
    ProgressBarModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
