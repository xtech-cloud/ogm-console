import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './certificate.data';
import { LicenseService } from '../service/license.service';

export const Style:string =`
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        display: inline-block;
        height: 2rem;
        width: 2rem;
      }
      .custom-day.focused {
        background-color: #e6e6e6;
      }
      .custom-day.range,
      .custom-day:hover {
        background-color: #0275d8;
        color: white;
      }
      .faded {
        opacity: 0.5;
      }
      .weekend {
        background-color: #242a33;
      }
      .hidden {
        display: none;
      }
`

@Component({
  templateUrl: './certificate.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class LicenseCertificateComponent implements OnInit{
  search = {offset:0, count:50, total:0, space:''};
  settings = tableData.settings; 
  source: LocalDataSource;
  private _tipSuccess = new Subject<string>();
  private _tipError = new Subject<string>();
  private _modalSuccess = new Subject<string>();
  private _modalError = new Subject<string>();
  tipSuccess:string = '';
  tipError:string = '';
  modalSuccess:string = '';
  modalError:string = '';
  private cers = [];

  constructor(protected licenseService:LicenseService, protected modalService: NgbModal) {
  }

  ngOnInit() {
    this._tipSuccess.subscribe(message => (this.tipSuccess = message));
    this._tipSuccess.pipe(debounceTime(3000)).subscribe(() => (this.tipSuccess= null));
    this._tipError.subscribe(message => (this.tipError= message));
    this._tipError.pipe(debounceTime(3000)).subscribe(() => (this.tipError = null));
    this._modalSuccess.subscribe(message => (this.modalSuccess = message));
    this._modalSuccess.pipe(debounceTime(3000)).subscribe(() => (this.modalSuccess = null));
    this._modalError.subscribe(message => (this.modalError = message));
    this._modalError.pipe(debounceTime(3000)).subscribe(() => (this.modalError = null));
    this.onSearchClick();
  }

  onSearchClick() : void {
      this.licenseService.cerList(this.search.offset, this.search.count, this.search.space, (_status, _cer, _total)=>{
          if(0 != _status.code) {
              this._tipError.next(_status.message);
              return;
          }
          this._tipSuccess.next(`获取到${_cer.length}条数据`);
          this.search.total = _total;
          this.cers = [];
          for (var i = 0; i < _cer.length; i++) {
              let cer = {
                  id: i+1,
                  uid : _cer[i]['uid'],
                  number : _cer[i]['number'],
                  consumer: _cer[i]['consumer'],
                  createdAt: format(_cer[i]['createdAt']*1000, "YYYY-MM-DD HH:mm:ss"),
              };
              this.cers.push(cer);
          }
          this.source = new LocalDataSource(this.cers); 
      });
  }

  onCustomAction(_event) { 
      if ("Download" == _event.action) {
          this.licenseService.cerFetch(_event.data.uid, (_status, _cer)=>{
              if(0 != _status.code) {
                  return;
              }
              let blob = new Blob([_cer.content], {type: 'text/plain;charset=utf-8'});
              saveAs(blob, 'app.cer');
          });
      } 
  }
}
