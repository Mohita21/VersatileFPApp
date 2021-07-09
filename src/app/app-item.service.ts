import { Injectable, ElementRef } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {stringify} from 'querystring';
import {catchError} from 'rxjs/operators';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})

export class AppItemService {

  // tslint:disable-next-line:variable-name
  private _jsonData: BehaviorSubject<JSON>;
  private readonly currentdata: Observable<JSON>;
  private httpOptions: { headers: HttpHeaders };


  constructor(private http: HttpClient) {
    this._jsonData = new BehaviorSubject<JSON>(undefined);
    this.currentdata = this._jsonData.asObservable();

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
  }
  // tslint:disable-next-line:typedef
  changeData(csvInJson: JSON) {
    this._jsonData.next( csvInJson );
  }
  get currentData(): Observable<JSON> {
    return this.currentdata;
  }
  sURL = 'http://127.0.0.1:5000/predict';
  tsURL = 'http://127.0.0.1:5000/TS_analysis';
  uniURL = 'http://127.0.0.1:5000/univariate_impute';
  SimURL = 'http://127.0.0.1:5000/SimilarityCheck';
  simOpURL= 'http://127.0.0.1:5000/SimilarOutput';
  transURL = 'http://127.0.0.1:5000/TransferLearningOp';
  transInURL = 'http://127.0.0.1:5000/TransferLearningIn';
  chunkURL = 'http://127.0.0.1:5000/ChunkImputation';
  simPrice = 'http://127.0.0.1:5000/SimilarOutputPrice';

  // tslint:disable-next-line:typedef
  private handleError(fft1: string, fft: any) {
    // tslint:disable-next-line:only-arrow-functions typedef
    return function(p1: any, p2: Observable<any>) {
      return undefined;
    };
  }

  // tslint:disable-next-line:typedef
  SimilarOutputPrice(med) {
    console.log(med);
    return this.http.post<any>(this.simPrice, med, this.httpOptions).pipe(catchError(this.handleError('SimilarOutputPrice', med)));
  }
  ChunkImputation(med) {
    console.log(med);
    return this.http.post<any>(this.chunkURL, med, this.httpOptions).pipe(catchError(this.handleError('ChunkImputation', med)));
  }
  // tslint:disable-next-line:typedef
  spredict(med) {
    console.log(med);
    return this.http.post<any>(this.sURL, med, this.httpOptions).pipe(catchError(this.handleError('spredict', med)));
  }

  // tslint:disable-next-line:typedef
  TS_analysis(med){
    console.log(med);
    return this.http.post<any>(this.tsURL, med, this.httpOptions).pipe(catchError(this.handleError('TS_analysis', med)));
  }
  uniImpute(med) {
    console.log(med);
    return this.http.post<any>(this.uniURL, med, this.httpOptions).pipe(catchError(this.handleError('uniImpute', med)));
  }

  // tslint:disable-next-line:typedef
  Similar(med){
    console.log(med);
    return this.http.post<any>(this.SimURL, med, this.httpOptions).pipe(catchError(this.handleError('Similar', med)));
  }
  // tslint:disable-next-line:typedef
  SimilarOutput(med){
    console.log(med);
    return this.http.post<any>(this.simOpURL, med, this.httpOptions).pipe(catchError(this.handleError('SimilarOutput', med)));
  }


  // tslint:disable-next-line:typedef
  TransferLearningOp(med){
    console.log(med);
    return this.http.post<any>(this.transURL, med, this.httpOptions).pipe(catchError(this.handleError('TransferLearningOp', med)));
  }

  // tslint:disable-next-line:typedef
  TransferLearningIn(med){
    console.log(med);
    return this.http.post<any>(this.transInURL, med, this.httpOptions).pipe(catchError(this.handleError('TransferLearningIn', med)));
  }
  public exportTableElmToExcel(element: ElementRef, fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element.nativeElement);
    // generate workbook and add the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    // save to file
    XLSX.writeFile(workbook, `${fileName}${EXCEL_EXTENSION}`);

}}
