import {Pipe, PipeTransform} from '@angular/core';
import {Village, Activity} from './shared';

@Pipe({
    name: 'villageFilter'
})
export class VillageFilterPipe implements PipeTransform {

    transform(villages: Village[], activity: number): Village[] {
        return activity ? villages.filter(village => {
            return !!(village.activities.indexOf(activity) + 1);
        }) : villages;
    }

}
