import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-village-list',
    templateUrl: './village-list.component.html',
    styleUrls: ['./village-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class VillageListComponent implements OnInit {

    @Input()
    public list;

    @Output()
    public currentEmitter: EventEmitter<any> = new EventEmitter();

    public current;

    constructor() {
    }

    ngOnInit() {
        this.setCurrent(this.list[0]);
    }

    public setCurrent(item){
        this.current = item;
        this.currentEmitter.emit(item)
    }

}
