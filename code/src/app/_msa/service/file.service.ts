import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class FileService {

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

  bucketMake(_name, _capacity,  _engine, _address, _scope, _accessKey, _accessSecret, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.file}/bucket/Make?name="${_name}"&capacity=${_capacity}&engine=${_engine}&address="${_address}"&scope="${_scope}"&accessKey="${_accessKey}"&accessSecret="${_accessSecret}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  bucketList(_offset, _count, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.file}/bucket/List?offset=${_offset}&count=${_count}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
  bucketGet(_name, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.file}/bucket/Get?name="${_name}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  objectPrepare(_bucket, _uname, _size, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.file}/object/Prepare?bucket="${_bucket}"&uname="${_uname}"&size="${_size}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  objectFlush(_bucket, _uname, _path, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.file}/object/Flush?bucket="${_bucket}"&uname="${_uname}"&path="${_path}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  objectList(_offset, _count, _bucket, _prefix, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.file}/object/List?offset=${_offset}&count=${_count}&bucket="${_bucket}"&prefix="${_prefix}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
}
