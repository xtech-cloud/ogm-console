import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './retrieval.data';
import { AccountService } from '../service/account.service';

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
  templateUrl: './retrieval.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class AccountRetrievalComponent implements OnInit{
  search = { offset: 0, count: 50, total:0};
  settings = tableData.settings; 
  source: LocalDataSource;
  private _success = new Subject<string>();
  private _modal = new Subject<string>();
  successMessage:string = '';
  modalMessage:string = '';
  modal = {
      name: '',
  };
  private accounts = [];

  constructor(protected accountService:AccountService, protected modalService: NgbModal) {
  }

  ngOnInit() {
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
      this.accountService.list(this.search.offset, this.search.count,  (_status, _account, _total)=>{
          if(0 != _status.code) {
              this._success.next(_status.message);
              return;
          }
          this._success.next(`获取到${_account.length}条数据`);
          this.accounts = [];
          this.search.total = _total;
          for (var i = 0; i < _account.length; i++) {
              let account = {
                  id: i+1,
                  username: _account[i]['username'],
                  uuid: _account[i]['uuid'],
                  createdAt: format(_account[i]['createdAt']*1000, "YYYY-MM-DD HH:mm:ss"),
                  updatedAt: format(_account[i]['updatedAt']*1000, "YYYY-MM-DD HH:mm:ss"),
              };
              this.accounts.push(account);
          }
          this.source = new LocalDataSource(this.accounts); 
      });
  }
}
