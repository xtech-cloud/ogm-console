import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './data';
import { MLBService } from '../mlb.service';

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
      .logarea {
        font-size: 14px;
        white-space: pre-line;
      }
`

@Component({
  templateUrl: './history.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class HistoryComponent implements OnInit{
  dateFrom: Date;
  dateTo: Date;
  search = { status: ''};
  settings = tableData.settings; 
  source: LocalDataSource;
  private _success = new Subject<string>();
  successMessage:string = '';
  modal = {
      uuid: '',
      meta: '',
      log: '',
  };
  attachments: {};

  constructor(protected mlbService:MLBService, private modalService: NgbModal) {
  }

  ngOnInit() {
    let now = new Date();
    this.dateTo = now;
    this.dateFrom = subMonths(now, 1);
    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
    this.onSearchClick();
  }

  searchReplyFilter(_task) {
      return _task
  }

  getModal() {
      return this.modal;
  }

  onSearchClick() : void {
      this.mlbService.fetchHistory(this.dateFrom, this.dateTo, (_status, _task)=>{
          this._success.next(`获取到${_task.length}条数据`);
          _task = this.searchReplyFilter(_task)
          this.attachments= {};
          let taskAry = [];
          for (var i = 0; i < _task.length; i++) {
              let task = {
                  id: i+1,
                  uuid: _task[i].uuid,
                  status: _task[i].status,
                  createdAt: format(_task[i].createdAt*1000, "YYYY-MM-DD HH:mm:ss"),
                  updatedAt: format(_task[i].updatedAt*1000, "YYYY-MM-DD HH:mm:ss"),
              };
              this.attachments[_task[i].uuid] = {
                  meta: _task[i].meta,
                  log: _task[i].log,
              }
              taskAry.push(task);
          }
          this.source = new LocalDataSource(taskAry); 
      });
  }

  onCustomAction(_event, _modal) {
      if ("open" == _event.action) {
          let uuid = _event.data.uuid;
          this.modal.uuid = uuid;
          this.modal.meta = JSON.stringify(JSON.parse(this.attachments[uuid].meta), null, 2);
          var reg = /(\[ERROR\].*)\n/g; 
          this.modal.log = this.attachments[uuid].log.replace(reg, '<font color="red">$1</font>\n');
          this.modalService.open(_modal, { centered: true, size:'lg' });
      }
  }
}
