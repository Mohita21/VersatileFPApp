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
  finaljson: {};
  finalimputed;
  flag = false;
  flag2 = false;
  flag3 = false;
  arr: Array<any> = [];
  data = [];
  lab = [];
  arr1 = [];

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
    this.appItemService.uniImpute(this.convertedObj).subscribe(message => {
      this.finalimputed = message;
      console.log(this.finalimputed); this.appItemService.changeData(this.finalimputed);
      this.flag3 = false; });

    this.flag2 = true;
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
