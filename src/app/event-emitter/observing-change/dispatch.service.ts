import {Injectable, EventEmitter, OnInit} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DispatchService implements OnInit {
    public dispatch: Subject<any> = new Subject;

    constructor() {
    }

    ngOnInit() {

    }
}
