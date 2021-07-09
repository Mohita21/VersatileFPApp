import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule} from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { SimcheckComponent } from './simcheck/simcheck.component';
import { ForecastComponent } from './forecast/forecast.component';
import {routing} from './app.routing';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { LineChart3Component } from './line-chart3/line-chart3.component';
import {NgxExtendedPdfViewerServerModule} from 'ngx-extended-pdf-viewer';
import { CreditsComponent } from './credits/credits.component';
import { PriceComponent } from './price/price.component';
import { YieldComponent } from './yield/yield.component';


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
    LineChart3Component,
    CreditsComponent,
    PriceComponent,
    YieldComponent,
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
    PdfViewerModule,
    FormsModule,
    NgxExtendedPdfViewerServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
