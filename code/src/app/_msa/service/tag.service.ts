import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class TagService {

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

  collectionList(_offset, _count, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.tag}/collection/ListTag?offset=${_offset}&count=${_count}`).subscribe( (rsp) => {
          console.log(rsp);
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['tag'] ? [] : rsp['tag'], total);
      });
  }
  addTag(_code, _name, _flag, _alias, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.tag}/collection/AddTag?code="${_code}"&name="${_name}"&flag=${_flag}&alias="${_alias}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
}
