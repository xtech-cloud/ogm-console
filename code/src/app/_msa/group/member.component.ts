import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './member.data';
import { GroupService } from '../service/group.service';

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
    templateUrl: './member.component.html',
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
    styles: [
        Style
    ]
})
export class GroupMemberComponent implements OnInit{
    settings = tableData.settings;
    source: LocalDataSource;
    private _success = new Subject<string>();
    private _modal = new Subject<string>();
    successMessage:string = '';
    modalMessage:string = '';
    modal = {
        collection: '',
        element: '',
    };
    search = {
        offset: 0,
        count: 50,
        total:0,
        collection:'' ,
    };
    private entities = [];

    constructor(protected groupService:GroupService, protected modalService: NgbModal) {
    }

    ngOnInit() {
        this._success.subscribe(message => (this.successMessage = message));
        this._success.pipe(debounceTime(3000)).subscribe(() => (this.successMessage = null));
        this._modal.subscribe(message => (this.modalMessage = message));
        this._modal.pipe(debounceTime(3000)).subscribe(() => (this.modalMessage = null));
        this.onSearchClick();
    }

    getModal() {
        return this.modal;
    }

    onSearchClick() : void {
        this.groupService.memberList(this.search.offset, this.search.count, this.search.collection, (_status, _entity, _total)=>{
            if(0 != _status.code) {
                this._success.next(_status.message);
                return;
            }
            this._success.next(`获取到${_entity.length}条数据`);
            this.entities= [];
            this.search.total = _total;
            for (var i = 0; i < _entity.length; i++) {
                let entity = {
                    id: i+1,
                    uuid: _entity[i]['uuid'],
                    collection: _entity[i]['collection'],
                    element: _entity[i]['element'],
                };
                this.entities.push(entity);
            }
            this.source = new LocalDataSource(this.entities);
        });
    }

    onAddClick(_modalNew) : void {
        this.modalService.open(_modalNew, { centered: true, size:'lg' });
    }

    submitAdd() : void {
        this.groupService.memberAdd(
            this.modal.collection,
            this.modal.element,
            (_status)=>{
                if(0 == _status.code) {
                    this._modal.next(`Success`);
                    this.onSearchClick();
                }else{
                    this._modal.next(_status.message);
                }
            });
    }
}
