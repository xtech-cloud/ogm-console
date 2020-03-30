import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
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
`

@Component({
  templateUrl: './queue.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class QueueComponent implements OnInit{
  dateFrom: Date;
  dateTo: Date;
  settings = tableData.settings; 
  source: LocalDataSource;
  private _success = new Subject<string>();
  successMessage:string = '';

  constructor(protected mlbService:MLBService) {
  }

  ngOnInit() {
    let now = new Date();
    this.dateTo = now;
    this.dateFrom = subMonths(now, 1);

    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
    this.onSearchClick();
  }

  onSearchClick() : void {
      this.mlbService.fetchQueue(this.dateFrom, this.dateTo,  (_status, _task)=>{
          this._success.next(`获取到${_task.length}条数据`);
          let taskAry = [];
          for (var i = 0; i < _task.length; i++) {
              let task = {
                  id: i+1,
                  uuid: _task[i].uuid,
                  time: format(_task[i].createdAt*1000, "YYYY-MM-DD HH:mm:ss")
              };
              taskAry.push(task);
          }
          this.source = new LocalDataSource(taskAry); 
      });
  }
}
