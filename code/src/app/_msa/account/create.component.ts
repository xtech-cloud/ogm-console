import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Md5} from 'ts-md5/dist/md5';
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
  templateUrl: './create.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  styles: [
    Style
  ]
})
export class AccountCreateComponent implements OnInit{
  private _success = new Subject<string>();
  successMessage:string = '';
  auth = {
      username: '',
      password: '',
  }

  constructor(protected accountService:AccountService) {
  }

  ngOnInit() {
    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
  }

  onCreateClick() : void {
      // 第一次反转
      let pwd = this.reverseString(this.auth.password);
      // 第一次MD5
      pwd = Md5.hashStr(pwd).toString().toUpperCase();
      // 第二次反转
      pwd = this.reverseString(pwd);
      // 第二次MD5
      pwd = Md5.hashStr(pwd).toString().toUpperCase();

      this.accountService.signup(this.auth.username, pwd,  (_status, _uuid)=>{
          if(0 != _status.code) {
              this._success.next(_status.message);
              return;
          }
          this._success.next(`Success`);
      });
  }

  reverseString(_value) : string {
      let str = _value.split("").reverse().join("");
      return str;
  }
}
