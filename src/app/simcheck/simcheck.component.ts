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

  form: FormGroup;
  numberoffiles;
  flag = false;
  constructor(private serv: AppItemService, private formBuilder: FormBuilder, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ft: new FormControl('', Validators.required)
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    console.log(value);
    // tslint:disable-next-line:radix
    this.numberoffiles = Array(parseInt(value['ft']));
    console.log(this.numberoffiles);
    this.flag = true;
  }

  // tslint:disable-next-line:typedef
  convert($event: any) {
  }

  // tslint:disable-next-line:typedef
  onError($event: String) {

  }

  addfiles() {
    this.flag =true;
  }
  // tslint:disable-next-line:typedef
  generateButton(){
    const button = this.renderer.createElement('Ngx-CSVtoJSON');
    // @ts-ignore
    this.renderer.appendChild(this.buttonsContainer.nativeElement, button);
  }
}
