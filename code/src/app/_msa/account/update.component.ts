import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { subMonths, format } from 'date-fns';
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
  templateUrl: './update.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class AccountUpdateComponent implements OnInit{
  fields = ['username', 'uuid']
  search = { value: "", field: "username"};
  account = { 
      username: "",
      password: "",
      profile: "", 
      uuid: "",
      createdAt:"",
      updatedAt: "",
  };
  private _success = new Subject<string>();
  successMessage:string = '';

  constructor(protected accountService:AccountService) {
  }

  ngOnInit() {
    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
  }

  onSearchClick() : void {
      this.account['username'] = "";
      this.account['password'] = "";
      this.account['uuid'] = "";
      this.account['profile'] = "";
      this.account['createdAt'] = "";
      this.account['updatedAt'] = "";
      let field = 2;
      if (this.search.field == this.fields[1]) {
          field = 1;
      }
      this.accountService.querySingle(field, this.search.value,  (_status, _account)=>{
          if(0 != _status.code) {
              this._success.next(_status.message);
              return;
          }
          this._success.next(`获取数据成功`);
          this.account['username'] = _account['username'];
          this.account['uuid'] = _account['uuid'];
          this.account['profile'] = _account['profile'];
          this.account['createdAt'] = format(_account['createdAt']*1000, "YYYY-MM-DD HH:mm:ss");
          this.account['updatedAt'] = format(_account['updatedAt']*1000, "YYYY-MM-DD HH:mm:ss");
      });
  }

  onSaveProfileClick(): void {
      if(null == this.account['uuid'] || null == this.account['profile']) {
          return;
      }
      let accessToken = this.account['uuid'];
      let profile = this.account['profile'];
      this.accountService.updateProfile( accessToken, profile, (_status)=>{
          if(0 != _status.code) {
              this._success.next(_status.message);
              return;
          }
          this._success.next(`更新资料成功`);
      });
  }

  onResetPasswordClick(): void {
      if(null == this.account['uuid'] || null == this.account['password']) {
          return;
      }
      let accessToken = this.account['uuid'];
      let password = this.account['password'];
      this.accountService.resetPassword( accessToken, password, (_status)=>{
          if(0 != _status.code) {
              this._success.next(_status.message);
              return;
          }
          this._success.next(`重置密码成功`);
      });
  }
}
