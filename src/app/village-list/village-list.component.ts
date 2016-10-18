import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {Village, Activity} from '../shared'

@Component({
    selector: 'app-village-list',
    templateUrl: './village-list.component.html',
    styleUrls: ['./village-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class VillageListComponent implements OnInit {

    @Input()
    public list;

    public activities = [
        [Activity.Horses, Activity[Activity.Horses]],
        [Activity.Volley, Activity[Activity.Volley]],
        [Activity.Tennis, Activity[Activity.Tennis]],
        [Activity.Swimming, Activity[Activity.Swimming]]
    ];

    @Output()
    public currentEmitter: EventEmitter<Village> = new EventEmitter();

    public current;

    public currentActivity = null;

    constructor() {
    }

    ngOnInit() {
        this.setCurrent(this.list[0]);
    }

    public setCurrent(item) {
        this.current = item;
        this.currentEmitter.emit(item);
    }

    public filter(act: number) {
        this.currentActivity = act;
    }
}
