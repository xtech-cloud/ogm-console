import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './task.data';
import { ApprovalService } from '../service/approval.service';

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
.mrless {
    margin-right: 0.4rem !important
}
`

@Component({
    templateUrl: './task.component.html',
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
    styles: [
        Style
    ]
})
export class ApprovalTaskComponent implements OnInit{
    search = { offset: 0, count: 50, total:0, workflow: '', state:'All' };
    settings = tableData.settings;
    source: LocalDataSource;
    private _success = new Subject<string>();
    private _modal = new Subject<string>();
    successMessage:string = '';
    modalMessage:string = '';
    TaskStatus = ['All', 'Pending', 'Accepted', 'Rejected'];
    modal = {
        subject: '',
        body: '',
        workflow: '',
        uuid: '',
        operator: '',
    };
    private entities = [];

    constructor(protected approvalService:ApprovalService, protected modalService: NgbModal) {
    }

    ngOnInit() {
        this._success.subscribe(message => (this.successMessage = message));
        this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
        this._modal.subscribe(message => (this.modalMessage = message));
        this._modal.pipe(debounceTime(3000)).subscribe(() => (this.modalMessage = null));
        this.onListClick();
    }

    getModal() {
        return this.modal;
    }

    onListClick() : void {
        let state = this.TaskStatus.indexOf(this.search.state);
        this.approvalService.taskList(this.search.offset, this.search.count, this.search.workflow, state, (_status, _entity, _total)=>{
            if(0 != _status.code) {
                this._success.next(_status.message);
                return;
            }
            this._success.next(`获取到${_entity.length}条数据`);
            this.entities = [];
            this.search.total = _total;
            for (var i = 0; i < _entity.length; i++) {
                let entity = {
                    id: i+1,
                    uuid: _entity[i]['uuid'],
                    subject: _entity[i]['subject'],
                    body: _entity[i]['body'],
                    state: _entity[i]['state'],
                };
                this.entities.push(entity);
            }
            this.source = new LocalDataSource(this.entities);
        });
    }

    onSearchClick() : void {
        let state = this.TaskStatus.indexOf(this.search.state);
        this.approvalService.taskSearch(this.search.offset, this.search.count, this.search.workflow, state, (_status, _entity, _total)=>{
            if(0 != _status.code) {
                this._success.next(_status.message);
                return;
            }
            this._success.next(`获取到${_entity.length}条数据`);
            this.entities = [];
            this.search.total = _total;
            for (var i = 0; i < _entity.length; i++) {
                let entity = {
                    id: i+1,
                    uuid: _entity[i]['uuid'],
                    subject: _entity[i]['subject'],
                    body: _entity[i]['body'],
                    state: _entity[i]['state'],
                };
                this.entities.push(entity);
            }
            this.source = new LocalDataSource(this.entities);
        });
    }


    openModal(_modal) : void {
        this.modalService.open(_modal, { centered: true, size:'lg' });
    }

    submitNew() : void {
        this.approvalService.taskSubmit(
            this.modal.subject,
            this.modal.body,
            this.modal.workflow,
            (_status)=>{
                if(0 == _status.code) {
                    this._modal.next(`Success`);
                    this.onListClick();
                }else{
                    this._modal.next(_status.message);
                }
            }
        );
    }

    submitAccept() : void {
        this.approvalService.taskAccept(
            this.modal.uuid,
            this.modal.operator,
            (_status) => {
                this.onListClick();
            }
        );
    }

    submitReject() : void {
        this.approvalService.taskReject(
            this.modal.uuid,
            this.modal.operator,
            (_status) => {
                this.onListClick();
            }
        );
    }


    onCustomAction(_event, _modalAccept, _modalReject) {
        this.modal.uuid = _event.data.uuid;
        if("accept" == _event.action) {
            this.openModal(_modalAccept);
        } else if("reject" == _event.action) {
            this.openModal(_modalReject);
        }
    }

}
