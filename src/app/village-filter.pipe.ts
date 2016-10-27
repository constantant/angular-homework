import {Pipe, PipeTransform} from '@angular/core';
import {VillageDataService} from './village-data.service';
import {Village} from './shared';

@Pipe({
    name: 'villageFilter'
})
export class VillageFilterPipe implements PipeTransform {

    constructor(private _villageData: VillageDataService) {
    }

    transform(villages: Village[], activity: number): Village[] {
        return this._villageData.activities[activity] ? villages.filter(village => {
            return !!(village.activities.indexOf(activity) + 1);
        }) : villages;
    }

}
