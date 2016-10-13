import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'app-temperatur',
    templateUrl: './temperatur.component.html',
    styleUrls: ['./temperatur.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TemperaturComponent implements OnInit {

    @Input()
    public current;

    constructor() {
    }

    ngOnInit() {
    }

}
