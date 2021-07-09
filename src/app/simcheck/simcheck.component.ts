import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, ValidatorFn} from '@angular/forms';
import { AppItemService} from '../app-item.service';
@Component({
  selector: 'app-simcheck',
  templateUrl: './simcheck.component.html',
  styleUrls: ['./simcheck.component.css']
})
export class SimcheckComponent implements OnInit {
  @ViewChild('buttonsContainer', {static: true}) buttonsContainer: ElementRef;
  pdfSource =  '/assets/Similarity_Output_Plots.pdf';
  form: FormGroup;
  numberoffiles;
  flag = false;
  ff = true;
  flag3 = true;
  flag2 = true;
  convertedObj;
  convertedObjstr: string;
  inp;
  arr: Array<any> = [];
  arr1: Array<any> = [];
  ar: Array<any> = [];
  a1 = [];
  a2 = [];
  d1 = [];
  d2 = [];
  // tslint:disable-next-line:variable-name
  percentage_similarity;
  // tslint:disable-next-line:variable-name
  similarity_message;


  constructor(private appItemService: AppItemService, private formBuilder: FormBuilder, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ft: new FormControl('', Validators.required),
      method: new FormControl('', Validators.required)
    });
    this.appItemService.currentData.subscribe( message => {this.convertedObj = message; } );
  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    console.log(value);
    // tslint:disable-next-line:radix
    this.numberoffiles = Array(parseInt(value.ft));
    console.log(this.numberoffiles);
    this.flag = true;
  }

  // tslint:disable-next-line:typedef


  // tslint:disable-next-line:typedef ban-types
  onError(err) {
    this.convertedObj = err;
    console.log(err);

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
    if (this.ff){
      // tslint:disable-next-line:prefer-for-of
      for (let step = 0; step < this.convertedObj.properties.length; step++){
        // console.log((Object.values(this.convertedObj.result[step])[0]));
        // tslint:disable-next-line:prefer-for-of
        this.a1 = [];
        // tslint:disable-next-line:prefer-for-of
        for (let step1 = 0; step1 < this.convertedObj.result.length; step1++)

        {this.a1.push((Object.values(this.convertedObj.result[step1])[step])); }
        this.arr[step] = this.a1;

        // tslint:disable-next-line:align
      }this.d1 = this.arr;
      console.log(this.d1);
      console.log(this.ff);
    }
    if (! this.ff){
        // tslint:disable-next-line:prefer-for-of
      for (let step = 0; step < this.convertedObj.properties.length; step++){
        // console.log((Object.values(this.convertedObj.result[step])[0]));
        // tslint:disable-next-line:prefer-for-of
        this.a2 = [];
        // tslint:disable-next-line:prefer-for-of
        for (let step1 = 0; step1 < this.convertedObj.result.length; step1++)

        {this.a2.push((Object.values(this.convertedObj.result[step1])[step])); }
        this.arr1[step] = this.a2;

      }
      this.d2 = this.arr1;
      console.log(this.d2);
      console.log(this.ff);
      this.ff = true;

    }
    this.ff = false;
  }

  // tslint:disable-next-line:typedef
    savefile(value: any) {
    console.log(value);
    this.flag3 = true;
    this.ar[0] = value;
    this.ar[1] = this.d1;
    this.ar[2] = this.d2;
    console.log(this.ar);
    this.appItemService.Similar(this.ar).subscribe(message => {
      this.inp = message;
      console.log(this.inp);
      this.percentage_similarity = this.inp["message"];
      // tslint:disable-next-line:triple-equals
      if (this.inp.binary_value == 1){this.similarity_message = 'The uploaded time series are similar'; }
      // tslint:disable-next-line:triple-equals
      if (this.inp.binary_value == 0){this.similarity_message = 'The uploaded time series are not similar'; }
      this.appItemService.changeData(this.inp);
      this.flag3 = false; });

    this.flag2 = true;
  }

  // tslint:disable-next-line:typedef
  addfiles() {
    this.flag = true;
  }


  // tslint:disable-next-line:typedef
  generateButton(){
    const button = this.renderer.createElement('Ngx-CSVtoJSON');
    // @ts-ignore
    this.renderer.appendChild(this.buttonsContainer.nativeElement, button);
  }
}
