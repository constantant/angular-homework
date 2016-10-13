import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'app-teddy-bear',
    templateUrl: './teddy-bear.component.html',
    styleUrls: ['./teddy-bear.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TeddyBearComponent implements OnInit {

    @Input()
    public current;

    constructor() {
    }

    ngOnInit() {
    }

}
