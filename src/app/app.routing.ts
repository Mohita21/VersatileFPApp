import {Routes, RouterModule} from '@angular/router';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {SimcheckComponent} from './simcheck/simcheck.component';
import {ForecastComponent} from './forecast/forecast.component';
import {MyBarChartComponent} from './my-bar-chart/my-bar-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {LineChart2Component} from './line-chart2/line-chart2.component';
import {LineChart3Component} from './line-chart3/line-chart3.component';
import {CreditsComponent} from './credits/credits.component';
import {PriceComponent} from './price/price.component';
import {YieldComponent} from './yield/yield.component';


const appRoutes: Routes = [
  { path: 'interpolation', component: InterpolationComponent},
  { path: 'simcheck', component: SimcheckComponent},
  { path: 'forecast', component: ForecastComponent},
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: 'line-chart2', component: LineChart2Component},
  {path: 'line-chart3', component: LineChart3Component},
  {path: 'credits', component: CreditsComponent},
  {path: 'price', component: PriceComponent},
  {path: 'yield', component: YieldComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
