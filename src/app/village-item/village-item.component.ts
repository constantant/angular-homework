import {Component, OnInit, Input} from '@angular/core';
import {Village} from '../shared';

@Component({
    selector: 'app-village-item',
    templateUrl: './village-item.component.html',
    styleUrls: ['./village-item.component.css']
})
export class VillageItemComponent implements OnInit {

    @Input()
    public item: Village;

    constructor() {
    }

    ngOnInit() {
    }

}
