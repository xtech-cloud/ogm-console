import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class GroupService {

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

  collectionMake(_name, _capacity, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.group}/collection/Make?name="${_name}"&capacity=${_capacity}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  collectionList(_offset, _count, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.group}/collection/List?offset=${_offset}&count=${_count}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
  collectionGet(_uuid, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.group}/collection/Get?uuid="${_uuid}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  memberList(_offset, _count, _collection, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.group}/member/List?offset=${_offset}&count=${_count}&collection="${_collection}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
  memberAdd(_collection, _element, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.group}/member/Add?collection="${_collection}"&element="${_element}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
}
