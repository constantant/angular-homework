import {Component, Input} from '@angular/core';
import {Village} from '../shared';

@Component({
    selector: 'app-village-item',
    templateUrl: './village-item.component.html',
    styleUrls: ['./village-item.component.css']
})
export class VillageItemComponent {

    @Input()
    public data: Village;

    constructor() {

    }
}
