import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './record.data';
import { ActivityService } from '../service/activity.service';

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
        border-radius: 1rem;
        color: white;
      }
      .hidden {
        display: none;
      }
`

@Component({
  templateUrl: './record.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class ActivityRecordComponent implements OnInit{
  dateFrom: Date;
  dateTo: Date;
  search = { notification: "", action:"" };
  settings = tableData.settings; 
  source: LocalDataSource;
  private _success = new Subject<string>();
  private _modal = new Subject<string>();
  successMessage:string = '';
  modalMessage:string = '';
  modal = {
      name: '',
  };
  private records = [];

  constructor(protected activityService:ActivityService, protected modalService: NgbModal) {
  }

  ngOnInit() {
    let now = new Date();
    this.dateTo = now;
    this.dateFrom = subMonths(now, 1);
    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
    this._modal.subscribe(message => (this.modalMessage = message));
    this._modal.pipe(debounceTime(3000)).subscribe(() => (this.modalMessage = null));
    this.onSearchClick();
  }

  getModal() {
      return this.modal; 
  }

  onSearchClick() : void {
      this.activityService.recordFetch(this.dateFrom, this.dateTo, this.search.notification, this.search.action,  (_status, _record)=>{
          if(0 != _status.code) {
              this._success.next(_status.message);
              return;
          }
          this._success.next(`获取到${_record.length}条数据`);
          this.records = [];
          for (var i = 0; i < _record.length; i++) {
              let record = {
                  id: i+1,
                  operatorLabel: _record[i]['operator']['label'],
                  operatorType: _record[i]['operator']['type'],
                  notification: _record[i]['channel']['notification'],
                  action: _record[i]['action'],
                  head: _record[i]['head'],
                  body: _record[i]['body'],
                  time: format(_record[i]['time']*1000, "YYYY-MM-DD HH:mm:ss"),
              };
              if (record.head  && record.head.length > 32){
                  record.head = record.head.substr(0,32) + " ..."
              }
              if (record.body && record.body.length > 32) {
                  record.body = record.body.substr(0,32) + " ..."
              }
              this.records.push(record);
          }
          this.source = new LocalDataSource(this.records); 
      });
  }
}
