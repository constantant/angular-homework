import {Component, ViewEncapsulation} from '@angular/core';
import {Village} from '../shared';
import {VillageDataService} from '../village-data.service';

@Component({
    selector: 'app-temperatur',
    templateUrl: './temperatur.component.html',
    styleUrls: ['./temperatur.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TemperaturComponent {

    public data: Village;

    constructor(public villageData: VillageDataService) {
        villageData.current.subscribe((village: Village) => {
            this.data = village;
        });
    }

}
