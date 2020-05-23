import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

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

  spaceCreate(_name, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/space/Create?name="${_name}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  spaceList(_offset, _count, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/space/List?offset=${_offset}&count=${_count}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, rsp['space'], total);
      });
  }
  spaceQuery(_name, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/space/Query?name="${_name}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  keyGenerate(_space, _count, _capacity, _expiry, _storage, _profile, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/key/Generate?space="${_space}"&count=${_count}&capacity=${_capacity}&expiry=${_expiry}&storage="${_storage}"&profile="${_profile}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp['number']);
      });
  }
  keyList(_offset, _count, _space, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/key/List?offset=${_offset}&count=${_count}&space="${_space}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, rsp['key'], total);
      });
  }
  keyActivate(_space, _number, _consumer, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/key/Activate?space="${_space}"&number="${_number}"&consumer="${_consumer}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  keySuspend(_space, _number, _ban, _reason, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/key/Suspend?space="${_space}"&number="${_number}"&ban=${_ban}&reason="${_reason}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  keyQuery(_number, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/key/Query?number="${_number}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  cerList(_offset, _count, _space, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/certificate/List?offset=${_offset}&count=${_count}&space="${_space}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, rsp['cer'], total);
      });
  }
  cerFetch(_uid, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.license}/certificate/Fetch?uid="${_uid}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp['cer']);
      });
  }
}
