import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, ValidatorFn} from '@angular/forms';
import { AppItemService} from '../app-item.service';
import { ExportToCsv } from 'export-to-csv';


const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Forecasted_Values',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

const csvExporter = new ExportToCsv(options);

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  form: FormGroup;
  result;
  // @ts-ignore
  arr = [];
  a1 = [];
  data = [];
  lab = [];
  convertedObj;
  convertedObjstr: string;
  arr1 = [];
  flag = false;
  flag2 = false;
  flag3 = true;
  inp;
  FP;
  County;
  MT;
  flag_retrain = false;
  flag_op_sim = false;
  flag_ip_sim = false;
  // tslint:disable-next-line:variable-name
  percentage_similarity;
  // tslint:disable-next-line:variable-name
  similarity_message;
  // tslint:disable-next-line:variable-name
  percentage_similarity2;
  // tslint:disable-next-line:variable-name
  similarity_message2;

  constructor(private appItemService: AppItemService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ft: new FormControl('Price', Validators.required),
      mt: new FormControl('', Validators.required),
      wa: new FormControl('', Validators.required),
      fp: new FormControl('', Validators.required),
      co: new FormControl('', Validators.required),
      sd: new FormControl(''),
      ed: new FormControl(''),
      fips:  new FormControl('')});
  }
  // tslint:disable-next-line:typedef
  // convert($event: any) {
  // }
  // tslint:disable-next-line:typedef
  convert(objArray) {
    console.log(objArray);
    this.convertedObjstr = JSON.stringify(objArray, null, 2);
    this.convertedObj = objArray;
    console.log(this.convertedObj);
    this.appItemService.changeData(this.convertedObj);
    console.log(this.convertedObj.result.length);
    console.log(this.convertedObj.properties.length);
    // tslint:disable-next-line:prefer-for-of
    for (let step = 0; step < this.convertedObj.properties.length; step++){
      // console.log((Object.values(this.convertedObj.result[step])[0]));
      // tslint:disable-next-line:prefer-for-of
      this.a1 = [];
      // tslint:disable-next-line:prefer-for-of
      for (let step1 = 0; step1 < this.convertedObj.result.length; step1++)

      {this.a1.push((Object.values(this.convertedObj.result[step1])[step])); }
      this.arr[step] = this.a1;

    }
    this.flag = true;
    console.log(this.arr);


  }
  // tslint:disable-next-line:typedef ban-types
  onError($event: String) {

  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    console.log(value);
    this.FP = value.fp;
    this.County = value.co;
    this.MT = value.mt;
    // tslint:disable-next-line:triple-equals
    if (this.FP != 'other' && this.County != 'other'){
      this.appItemService.spredict(value).subscribe(message => {
        this.result = message;
        console.log(this.result);
        this.appItemService.changeData(this.result);
      });
      this.flag2 = true; }
    // tslint:disable-next-line:triple-equals
    if (this.FP == 'other' && this.County != 'other'){
      // tslint:disable-next-line:triple-equals
      this.appItemService.SimilarOutputPrice(this.arr).subscribe(message => {
        this.inp = message;
        console.log(this.inp);
        this.percentage_similarity = this.inp.message;
        this.similarity_message = this.inp.binary_value;
        console.log(this.similarity_message);
        // tslint:disable-next-line:triple-equals
        if (this.similarity_message == '1'){ this.flag_op_sim = true; }
        // tslint:disable-next-line:triple-equals
        if (this.similarity_message == '0'){ this.flag_op_sim = false; }
        this.appItemService.changeData(this.inp);
        this.flag3 = false;
        console.log(this.flag_op_sim);
        console.log(this.similarity_message);
        if (this.flag_op_sim){
          value = [value, this.arr];
          // tslint:disable-next-line:no-shadowed-variable
          this.appItemService.TransferLearningOp(value).subscribe(message => {
            this.result = message;
            console.log(this.result);
            this.appItemService.changeData(this.result);
          });
          this.flag2 = true; }
        // tslint:disable-next-line:triple-equals
        if (! this.flag_op_sim){
          this.flag_retrain = true;
        }
      });

      // tslint:disable-next-line:triple-equals

    }
    // tslint:disable-next-line:triple-equals
    if (this.MT == 'Station' && this.County == 'other'){
      console.log(this.County);
      console.log(this.arr);
      this.appItemService.SimilarOutputPrice(this.arr).subscribe(message => {
        this.inp = message;
        console.log(this.inp);
        this.percentage_similarity = this.inp.message;
        this.similarity_message = this.inp.binary_value;
        this.percentage_similarity2 = this.inp.message2;
        this.similarity_message2 = this.inp.binary_value_ip;
        // tslint:disable-next-line:triple-equals
        if (this.similarity_message == '1' && this.similarity_message2 == '1'){ this.flag_ip_sim = true; }
        // tslint:disable-next-line:triple-equals
        if (this.similarity_message == '0' && this.similarity_message2 == '0'){ this.flag_ip_sim = false; }
        this.appItemService.changeData(this.inp);
        this.flag3 = false;
        console.log(this.flag_ip_sim);
        console.log(this.similarity_message);
        if (this.flag_ip_sim){
          value = [value, this.arr];
          // tslint:disable-next-line:no-shadowed-variable
          this.appItemService.TransferLearningIn(value).subscribe(message => {
            this.result = message;
            console.log(this.result);
            this.appItemService.changeData(this.result);
          });
          this.flag2 = true; }
        // tslint:disable-next-line:triple-equals
        if (! this.flag_ip_sim){
          this.flag_retrain = true;
        }
      });

    }


    // tslint:disable-next-line:triple-equals
    if ((this.MT == 'Satellite' ) && this.County == 'other'){
      console.log(this.County);
      console.log(this.arr);
      this.appItemService.SimilarOutputPrice(this.arr).subscribe(message => {
        this.inp = message;
        console.log(this.inp);
        this.percentage_similarity = this.inp.message;
        this.similarity_message = this.inp.binary_value;
        console.log(this.similarity_message);
        // tslint:disable-next-line:triple-equals
        if (this.similarity_message == '1'){ this.flag_op_sim = true; }
        // tslint:disable-next-line:triple-equals
        if (this.similarity_message == '0'){ this.flag_op_sim = false; }
        this.appItemService.changeData(this.inp);
        this.flag3 = false;
        console.log(this.flag_ip_sim);

        if (this.flag_op_sim){
          value = [value, this.arr];
          // tslint:disable-next-line:no-shadowed-variable
          this.appItemService.TransferLearningIn(value).subscribe(message => {
            this.result = message;
            console.log(this.result);
            this.appItemService.changeData(this.result);
          });
          this.flag2 = true; }
        // tslint:disable-next-line:triple-equals
        if (! this.flag_op_sim){
          this.flag_retrain = true;
        }
      });
    }
    // tslint:disable-next-line:triple-equals
    if ((this.MT == 'Combined' ) && this.County == 'other'){
      {
        console.log(this.County);
        console.log(this.arr);
        this.appItemService.SimilarOutputPrice(this.arr).subscribe(message => {
          this.inp = message;
          console.log(this.inp);
          this.percentage_similarity = this.inp.message;
          this.similarity_message = this.inp.binary_value;
          this.percentage_similarity2 = this.inp.message2;
          this.similarity_message2 = this.inp.binary_value_ip;
          // tslint:disable-next-line:triple-equals
          if (this.similarity_message == '1' && this.similarity_message2 == '1'){ this.flag_ip_sim = true; }
          // tslint:disable-next-line:triple-equals
          if (this.similarity_message == '0' && this.similarity_message2 == '0'){ this.flag_ip_sim = false; }
          this.appItemService.changeData(this.inp);
          this.flag3 = false;
          console.log(this.flag_ip_sim);
          console.log(this.similarity_message);
          if (this.flag_ip_sim){
            value = [value, this.arr];
            // tslint:disable-next-line:no-shadowed-variable
            this.appItemService.TransferLearningIn(value).subscribe(message => {
              this.result = message;
              console.log(this.result);
              this.appItemService.changeData(this.result);
            });
            this.flag2 = true; }
          // tslint:disable-next-line:triple-equals
          if (! this.flag_ip_sim){
            this.flag_retrain = true;
          }
        });

      }
    }

  }

  // tslint:disable-next-line:typedef
  download(){
    console.log(this.result);
    // tslint:disable-next-line:prefer-for-of
    for (let step = 0; step < this.result.result.length; step++){
      // this.lab.push(this.result.result[step]);
      // console.log((Object.values(this.convertedObj.result[step])[0]));
      this.arr1.push((this.result.result[step])); }
    console.log(this.arr1);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.arr1.length; i++){
      this.data.push({Value: this.arr1[i]});
    }

    csvExporter.generateCsv(this.data);

  }


}
