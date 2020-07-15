import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './channel.data';
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
  templateUrl: './channel.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class ActivityChannelComponent implements OnInit{
  notification = '';
  search = { offset: 0, count: 50, total:0};
  settings = tableData.settings; 
  source: LocalDataSource;
  private _success = new Subject<string>();
  private _add = new Subject<string>();
  private _modal = new Subject<string>();
  successMessage:string = '';
  addMessage:string = '';
  modalMessage:string = '';
  modal = {
      name: '',
  };
  private channels = [];

  constructor(protected activityService:ActivityService, protected modalService: NgbModal) {
  }

  ngOnInit() {
    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
    this._add.subscribe(message => (this.addMessage = message));
    this._add.pipe(debounceTime(3000)).subscribe(() => (this.addMessage = null));
    this._modal.subscribe(message => (this.modalMessage = message));
    this._modal.pipe(debounceTime(3000)).subscribe(() => (this.modalMessage = null));
    this.onSearchClick();
  }

  getModal() {
      return this.modal; 
  }

  onSearchClick() : void {
      this.activityService.channelFetch(this.search.offset, this.search.count,  (_status, _channel, _total)=>{
          if(0 != _status.code) {
              this._success.next(_status.message);
              return;
          }
          this.search.total = _total;
          this._success.next(`获取到${_channel.length}条数据`);
          this.channels= [];
          this.search.total = _total;
          for (var i = 0; i < _channel.length; i++) {
              let channel = {
                  id: i+1,
                  notification: _channel[i]['notification'],
                  alias: _channel[i]['alias'],
              };
              this.channels.push(channel);
          }
          this.source = new LocalDataSource(this.channels); 
      });
  }

  onAddClick() : void {
      this.activityService.channelAdd(this.notification,  (_status)=>{
          if(0 != _status.code) {
              this._add.next(_status.message);
              return;
          }
      });
  }
}
