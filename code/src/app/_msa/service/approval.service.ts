import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'app/_config/app.config'

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

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

  workflowMake(_name, _mode, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/workflow/Make?name="${_name}"&mode=${_mode}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  workflowList(_offset, _count, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/workflow/List?offset=${_offset}&count=${_count}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
  workflowGet(_uuid, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/workflow/Get?uuid="${_uuid}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  workflowRemove(_uuid, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/workflow/Remove?uuid="${_uuid}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status, rsp);
      });
  }
  operatorJoin(_operator, _workflow, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/operator/Join?operator="${_operator}"&workflow="${_workflow}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  operatorLeave(_operator, _workflow, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/operator/Leave?operator="${_operator}"&workflow="${_workflow}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  operatorList(_offset, _count, _workflow, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/operator/List?offset=${_offset}&count=${_count}&workflow="${_workflow}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
  taskSubmit(_subject, _body, _workflow, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/task/Submit?subject="${_subject}"&body="${_body}"&workflow="${_workflow}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
  taskAccept(_uuid, _operator, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/task/Accept?uuid="${_uuid}"&operator="${_operator}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  taskReject(_uuid, _operator, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/task/Reject?uuid="${_uuid}"&operator="${_operator}"`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          _onReply(status);
      });
  }
  taskList(_offset, _count, _workflow, _state, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/task/List?offset=${_offset}&count=${_count}&workflow="${_workflow}"&state=${_state}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
  taskSearch(_offset, _count, _workflow, _state, _onReply) {
      this.http.get(`${AppConfig.settings.api.msa.approval}/task/Search?offset=${_offset}&count=${_count}&workflow="${_workflow}"&state=${_state}`).subscribe( (rsp) => {
          let status = this.handleReply(rsp);
          let total = null == rsp['total'] ? 0 : rsp['total'];
          _onReply(status, null == rsp['entity'] ? [] : rsp['entity'], total);
      });
  }
}
