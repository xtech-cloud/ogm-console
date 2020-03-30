import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class MLBService {

  constructor(private http:HttpClient) { }

  handleReply(_rsp) {
      let status = {
          code: 0,
          message: ''
      }
      if (null != _rsp['status']['code']) {
          status.code = _rsp['status']['code']
          status.message = _rsp['status']['message']
      }
      return status
  }

  fetchQueue(_dateFrom, _dateTo, _onReply) {
      let from:number = 0;
      let to:number = 0;
      if (null != _dateFrom) {
          from = Date.parse(_dateFrom)/1000;
      }
      if (null != _dateTo) {
          to = Date.parse(_dateTo)/1000;
      }
      this.http.get(`${AppConfig.settings.api.bla.mlb}/task/FetchQueue?startTime=${from}&endTime=${to}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp)
          _onReply(status, rsp['task'])
      });
  }

  fetchHistory(_dateFrom, _dateTo, _onReply) {
      let from:number = 0;
      let to:number = 0;
      if (null != _dateFrom) {
          from = Date.parse(_dateFrom)/1000;
      }
      if (null != _dateTo) {
          to = Date.parse(_dateTo)/1000;
      }
      this.http.get(`${AppConfig.settings.api.bla.mlb}/task/FetchHistory?startTime=${from}&endTime=${to}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp)
          _onReply(status, rsp['task'])
      });
  }
}
