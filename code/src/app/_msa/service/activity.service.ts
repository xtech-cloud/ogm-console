import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

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

  channelFetch(_offset, _count, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.activity}/Channel/Fetch?offset=${_offset}&count=${_count}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, rsp['channel'], total);
      });
  }

  channelAdd(_notification, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.activity}/Channel/Subscribe?notification="${_notification}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }

  recordFetch(_dateFrom, _dateTo, _notification, _action, _onReply) {
      let from:number = 0;
      if (null != _dateFrom) {                                                                                                                                                
        from = Date.parse(_dateFrom)/1000;                                                                                                                                  
      }  
      let to:number = 0;
      if (null != _dateTo) {                                                                                                                                                
        to = Date.parse(_dateTo)/1000;                                                                                                                                  
      }  
      this.http.get(`${AppConfig.settings.api.msa.activity}/Record/Fetch?startTime=${from}&endTime=${to}&notification="${_notification}"&action="${_action}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, rsp['record'], total);
      });
  }
}
