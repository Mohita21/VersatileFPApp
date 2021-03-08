import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, ValidatorFn} from '@angular/forms';
import { AppItemService} from '../app-item.service';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  form: FormGroup;
  result;

  constructor(private serv: AppItemService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ft: new FormControl('', Validators.required),
      mt: new FormControl('', Validators.required),
      wa: new FormControl('', Validators.required),
      fp: new FormControl('', Validators.required),
      co: new FormControl('', Validators.required),
      sd: new FormControl(''),
      ed: new FormControl('')});
  }
  // tslint:disable-next-line:typedef
  convert($event: any) {
  }

  // tslint:disable-next-line:typedef ban-types
  onError($event: String) {

  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    console.log(value);
    this.serv.spredict(value).subscribe(message => {
      this.result = message;
      console.log(this.result); this.serv.changeData(this.result);
    });

  }


}
