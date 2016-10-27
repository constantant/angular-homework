import {Component, ViewEncapsulation} from '@angular/core';
import {VillageDataService} from '../village-data.service';
import {Village} from "../shared/village";

@Component({
    selector: 'app-village-list',
    templateUrl: './village-list.component.html',
    styleUrls: ['./village-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class VillageListComponent {

    public current: Village;

    public currentActivity: number;

    public villages: Village[] = [];

    constructor(public villageData: VillageDataService) {
        villageData.villages.subscribe((village: Village) => {
            this.villages.push(village);
        });

        villageData.current.subscribe((village: Village) => {
            this.current = village;
        });

        villageData.currentActivity.subscribe((currentActivity: number) => {
            this.currentActivity = currentActivity;
        });
    }

}
