import {Component, ViewEncapsulation} from '@angular/core';
import {Village} from '../shared';
import {VillageDataService} from '../village-data.service';

@Component({
    selector: 'app-teddy-bear',
    templateUrl: './teddy-bear.component.html',
    styleUrls: ['./teddy-bear.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TeddyBearComponent {

    public data: Village;

    constructor(public villageData: VillageDataService) {
        villageData.current.subscribe((village: Village) => {
            this.data = village;
        });
    }

}
