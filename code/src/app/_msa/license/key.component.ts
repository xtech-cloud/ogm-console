import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './key.data';
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
  templateUrl: './key.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class LicenseKeyComponent implements OnInit{
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
  modal = {
      space: '',
      number: '',
      consumer: '',
      ban: 0,
      reason: '',
      count: 1,
      expiry: 0,
      capacity: 1,
      storage: '',
      profile: '',
  };
  private keys = [];

  getModal() {
      return this.modal;
  }

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

  onGenerateClick(_modalGenerate) : void {
      this.modal.space = '';
      this.modal.count = 1;
      this.modal.capacity = 1;
      this.modal.expiry = 0;
      this.modal.storage = '';
      this.modal.profile = '';
      this.modalService.open(_modalGenerate, { centered: true, size:'lg' });
  }

  submitGenerate() {
      this.licenseService.keyGenerate(
          this.modal.space, 
          this.modal.count, 
          this.modal.capacity,
          this.modal.expiry,
          this.modal.storage,
          this.modal.profile,
          (_status, _number, _total)=>{
              if(0 != _status.code) {
                  this._modalError.next(_status.message);
                  return;
              }
              this._modalSuccess.next('Success');
              this.search.space = this.modal.space;
              this.onSearchClick();
          }
      );
  }

  onSearchClick() : void {
      this.licenseService.keyList(this.search.offset, this.search.count, this.search.space, (_status, _number, _total)=>{
          if(0 != _status.code) {
              this._tipError.next(_status.message);
              return;
          }
          this._tipSuccess.next(`获取到${_number.length}条数据`);
          this.search.total = _total;
          this.keys = [];
          for (var i = 0; i < _number.length; i++) {
              let capacity = 0;
              if(null != _number[i]['capacity']) {
                  capacity = _number[i]['capacity'];
              }
              let consumer = 0;
              if(null != _number[i]['consumer']) {
                  consumer = _number[i]['consumer'].length;
              }
              let key = {
                  id: i+1,
                  number : _number[i]['number'],
                  expiry : 0,
                  storage : _number[i]['storage'],
                  profile: _number[i]['profile'],
                  ban: 0,
                  activatedAt: '',
                  createdAt: format(_number[i]['createdAt']*1000, "YYYY-MM-DD HH:mm:ss"),
                  capacity: consumer + '/' + capacity,
              };
              if(null != _number[i]['expiry']) {
                  key.expiry = _number[i]['expiry'];
              }
              if(null != _number[i]['ban']) {
                  key.ban = _number[i]['ban'];
              }
              if(null != _number[i]['activatedAt']) {
                  key.activatedAt = format(_number[i]['activatedAt']*1000, "YYYY-MM-DD HH:mm:ss");
              }
              this.keys.push(key);
          }
          this.source = new LocalDataSource(this.keys); 
      });
  }

  queryKey(_number) : void {
      this.licenseService.keyQuery(_number,  (_status, _reply)=>{
          for (var i = 0; i < this.keys.length; i++) {
              if(this.keys[i].number == _reply['number']) {
                  this.keys[i].capacity = _reply['capacity']
                  this.keys[i].expiry = _reply['expiry']
                  this.keys[i].storage = _reply['storage']
                  this.keys[i].profile = _reply['profile']
                  this.keys[i].ban = _reply['ban']
                  this.keys[i].activatedAt = _reply['activatedAt']
              }
          }
      });
  }

  onCustomAction(_event,_modalActivate,  _modalSuspend, _modalDetail) { 
      this.modal.number = _event.data.number;
      this.modal.space = this.search.space;
      this.modal.consumer = '';
      this.modal.ban = 0;
      this.modal.reason = '';
      if ("activate" == _event.action) {
          this.modalService.open(_modalActivate, { centered: true, size:'lg' });
      } else if ("suspend" == _event.action) {
          this.modalService.open(_modalSuspend, { centered: true, size:'lg' });
      }
  }

  submitActivate() : void {
      this.licenseService.keyActivate(this.modal.space, this.modal.number, this.modal.consumer, (_status)=>{
          if(0 != _status.code) {
              this._modalError.next(_status.message);
              return;
          }
          this._modalSuccess.next('Success');
          this.onSearchClick();
      });
  }

  submitSuspend() : void {
      this.licenseService.keySuspend(this.modal.space, this.modal.number, this.modal.ban, this.modal.reason, (_status)=>{
          if(0 != _status.code) {
              this._modalError.next(_status.message);
              return;
          }
          this._modalSuccess.next('Success');
          this.onSearchClick();
      });
  }
}
