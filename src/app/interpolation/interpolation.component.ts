import {Component, EventEmitter, Inject, Input, OnInit, ViewChild, ElementRef, Output, VERSION} from '@angular/core';
import {AppItemService} from '../app-item.service';
import { ExportToCsv } from 'export-to-csv';

import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

// tslint:disable-next-line:prefer-const


const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Imputed CSV',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

const csvExporter = new ExportToCsv(options);




@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor(private appItemService: AppItemService) { }
  name = 'Angular ' + VERSION.major;
  convertedObj;
  convertedObjstr: string;
  convOb;
  convOb2;
  finaljson: {};
  finalimputed;
  analysis;
  f = false;
  flag = false;
  flag2 = false;
  flag3 = false;
  flag4 = false;
  flag5 = false;
  arr: Array<any> = [];
  data = [];
  lab = [];
  arr1 = [];
  arr2 =[];

  // tslint:disable-next-line:typedef
  convert2(objArray){
    console.log(objArray);
    this.f = false;
    this.convertedObjstr = JSON.stringify(objArray, null, 2);
    this.convertedObj = objArray;
    this.appItemService.changeData(this.convertedObj);
    console.log(this.convertedObj);
    console.log(this.convertedObj.result.length);
    console.log(this.convertedObj.result);
    // tslint:disable-next-line:prefer-for-of
    for (let step = 0; step < this.convertedObj.result.length; step++){
      console.log((Object.values(this.convertedObj.result[step])[0]));

      this.arr2.push((Object.values(this.convertedObj.result[step])[0]));
      // tslint:disable-next-line:triple-equals
      if ((Object.values(this.convertedObj.result[step])[0]) === 'nan')
        {
        this.f = true; }
    }
    this.flag = true;
    console.log(this.f);
    console.log(this.arr2);
    this.convOb2 = this.convertedObj;
  }
  // tslint:disable-next-line:typedef
  convert(objArray) {
    console.log(objArray);
    this.convertedObjstr = JSON.stringify(objArray, null, 2);
    this.convertedObj = objArray;
    this.appItemService.changeData(this.convertedObj);
    console.log(this.convertedObj);
    console.log(this.convertedObj.result.length);
    console.log(this.convertedObj.result.keys());
    // tslint:disable-next-line:prefer-for-of
    for (let step = 0; step < this.convertedObj.result.length; step++){
      // console.log((Object.values(this.convertedObj.result[step])[0]));

      this.arr.push((Object.values(this.convertedObj.result[step])[0]));

    }
    this.flag = true;
    console.log(this.arr);
    this.appItemService.TS_analysis(this.convertedObj).subscribe(mess => {
      this.analysis = mess;
      console.log(this.analysis);
      console.log(this.analysis.type);
      console.log(this.analysis.chunk);
      // tslint:disable-next-line:triple-equals
      if (this.analysis.chunk == 0)
      {this.flag5 = true; }
      this.appItemService.changeData(this.analysis); });
    this.flag4 = true;
    this.convOb = this.convertedObj;
    // tslint:disable-next-line:triple-equals

  }
  // tslint:disable-next-line:typedef
  onError(err) {
    this.convertedObj = err;
    console.log(err);
  }


  ngOnInit(): void {
    this.appItemService.currentData.subscribe( message => {this.convertedObj = message; } );
  }

  // tslint:disable-next-line:typedef
  savefile() {
    this.flag3 = true;
    console.log(this.convOb);
    // tslint:disable-next-line:triple-equals
    if (this.flag5 == false) {
      this.appItemService.uniImpute(this.convOb).subscribe(message => {
        this.finalimputed = message;
        console.log(this.finalimputed);
        // console.log(this.finalimputed.type);
        this.appItemService.changeData(this.finalimputed);
        this.flag3 = false;
      });
      this.flag2 = true;
    }
    // tslint:disable-next-line:triple-equals
    if (this.flag5 == true) {
      this.arr2[0] = this.convOb;
      this.arr2[1] = this.convOb2;
      console.log(this.arr2);
      this.appItemService.ChunkImputation(this.arr2).subscribe(message => {
        this.finalimputed = message;
        console.log(this.finalimputed);
        this.appItemService.changeData(this.finalimputed);
        this.flag3 = false;
      });
      this.flag2 = true;
    }
  }

  // tslint:disable-next-line:typedef
  download(){

    for (let step = 0; step < this.finalimputed.message.length; step++){
      this.lab.push(step);
      // console.log((Object.values(this.convertedObj.result[step])[0]));
      this.arr1.push((Object.values(this.finalimputed.message[step])[0])); }
    console.log(this.arr1);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.arr1.length; i++){
      this.data.push({Value: this.arr1[i]});
    }

    csvExporter.generateCsv(this.data);

}
}
