import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  handleReply(_rsp) {
      let status = {
          code: 0,
          message: ''
      }
      if (null != _rsp['status']['code']) {
          status.code = _rsp['status']['code'];
          status.message = _rsp['status']['message'];
      }
      return status
  }

  signup(_username, _password, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.account}/Auth/Signup?username="${_username}"&password="${_password}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let uuid = null == rsp['uuid'] ? "" : rsp['uuid'];
          _onReply(status, uuid);
      });
  }

  queryList(_offset, _count, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.account}/Query/List?offset=${_offset}&count=${_count}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, rsp['account'], total);
      });
  }

  querySingle(_field, _value, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.account}/Query/Single?field=${_field}&value="${_value}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp['account']);
      });
  }

  updateProfile(_accessToken, _profile, _onReply) {
      // strategy为空时，accessToken为uuid
      this.http.get(`${AppConfig.settings.api.msa.account}/Profile/Update?accessToken=${_accessToken}&profile="${_profile}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }

  resetPassword(_accessToken, _password, _onReply) {
      // strategy为空时，accessToken为uuid
      this.http.get(`${AppConfig.settings.api.msa.account}/Auth/ResetPasswd?accessToken=${_accessToken}&password="${_password}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
}
