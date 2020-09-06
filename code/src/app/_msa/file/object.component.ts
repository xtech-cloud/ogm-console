import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { subMonths, format } from 'date-fns';
import * as tableData from './object.data';
import { FileService } from '../service/file.service';

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
    templateUrl: './object.component.html',
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
    styles: [
        Style
    ]
})
export class FileObjectComponent implements OnInit{
    search = { offset: 0, count: 50, total:0, bucket:'' };
    settings = tableData.settings;
    source: LocalDataSource;
    private _success = new Subject<string>();
    private _modal = new Subject<string>();
    successMessage:string = '';
    modalMessage:string = '';
    modal = {
        bucket: '',
        uname: '',
        size: 0,
        engine: '',
        accessToken: '',
        address: '',
        path: '',
    };
    private objects = [];

    constructor(protected fileService:FileService, protected modalService: NgbModal) {
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
        this.fileService.objectList(this.search.offset, this.search.count, this.search.bucket, (_status, _entity, _total)=>{
            if(0 != _status.code) {
                this._success.next(_status.message);
                return;
            }
            this._success.next(`获取到${_entity.length}条数据`);
            this.objects= [];
            this.search.total = _total;
            for (var i = 0; i < _entity.length; i++) {
                let entity = {
                    id: i+1,
                    filepath: _entity[i]['filepath'],
                    md5: _entity[i]['md5'],
                    size: _entity[i]['size'],
                    url: _entity[i]['url'],
                };
                this.objects.push(entity);
            }
            this.source = new LocalDataSource(this.objects);
        });
    }

    onPrepareClick(_modal) : void {
        this.modalService.open(_modal, { centered: true, size:'lg' });
    }

    onFlushClick(_modal) : void {
        this.modalService.open(_modal, { centered: true, size:'lg' });
    }

    submitPrepare() : void {
        this.modal.engine = '';
        this.modal.address = '';
        this.modal.accessToken = '';
        this.fileService.objectPrepare(
            this.modal.bucket,
            this.modal.uname,
            this.modal.size,
            (_status, _reply)=>{
                if(0 == _status.code) {
                    this._modal.next(`Success`);
                    this.modal.engine = _reply['engine'];
                    this.modal.address = _reply['address'];
                    this.modal.accessToken = _reply['accessToken'];
                    this.onSearchClick();
                }else{
                    this._modal.next(_status.message);
                }
            });
    }

    submitFlush() : void {
        this.fileService.objectFlush(
            this.modal.bucket,
            this.modal.uname,
            this.modal.path,
            (_status, _reply)=>{
                if(0 == _status.code) {
                    this._modal.next(`Success`);
                    this.modal.engine = _reply['engine'];
                    this.modal.address = _reply['address'];
                    this.modal.accessToken = _reply['accessToken'];
                    this.onSearchClick();
                }else{
                    this._modal.next(_status.message);
                }
            });
    }

    formatStorage(_totalSize, _freeSize) {
    }

}
