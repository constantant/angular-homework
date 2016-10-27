import {Injectable} from '@angular/core';
import {Village, Activity} from './shared';

import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import  'rxjs/add/observable/from';

@Injectable()
export class VillageDataService {

    public current: ReplaySubject<Village> = new ReplaySubject<Village>();

    public currentActivity: ReplaySubject<number> = new ReplaySubject<number>();

    public activities = [
        [Activity.Horses, Activity[Activity.Horses]],
        [Activity.Volley, Activity[Activity.Volley]],
        [Activity.Tennis, Activity[Activity.Tennis]],
        [Activity.Swimming, Activity[Activity.Swimming]]
    ];

    private _villages: Village[] = [
        {
            title: 'Title of some place',
            phone: '+1 6566 54 654',
            weather: 12,
            followers: 343,
            following: 999,
            activities: [
                Activity.Horses
            ],
            images: [
                'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ogi_Shirakawa02bs3200.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/f/f6/Ourika_berbere_village.jpg'
            ]
        },
        {
            title: 'The Village',
            phone: '+7 6545435543543',
            weather: 14,
            followers: 233,
            following: 489,
            activities: [
                Activity.Tennis,
                Activity.Swimming
            ],
            images: [
                'http://www.isvarmurti.com/blog/wp-content/uploads/2013/11/Akha_village.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/c/c7/Guri_Rajasthan_02.jpg'
            ]
        },
        {
            title: 'XXX xxxx xxxx',
            phone: '+4 2312112312312',
            weather: 33,
            followers: 444,
            following: 44,
            activities: [
                Activity.Swimming,
                Activity.Horses
            ],
            images: [
                'https://media-cdn.tripadvisor.com/media/photo-s/01/5a/3f/73/village-view.jpg',
                'https://anthromes.wikispaces.com/file/view/life_in_china.1249650379.3_ancient-xidi-x-hongcun-villages.jpg/139496743/life_in_china.1249650379.3_ancient-xidi-x-hongcun-villages.jpg'
            ]
        },
        {
            title: 'The f....',
            phone: '+5 343243242 3423',
            weather: 23,
            followers: 35,
            following: 32,
            activities: [
                Activity.Volley,
                Activity.Tennis
            ],
            images: [
                'https://propelsteps.files.wordpress.com/2013/10/japan-village2.jpg',
                'http://nativepakistan.com/wp-content/uploads/Photos-of-Pakistani-Villages-Photo-of-a-mud-hut-and-a-cart-in-a-fruit-garden-in-a-village-Pictures-of-Pakistani-Villages-Pakistani-Village-Life.jpg'
            ]
        }
    ];

    public villages: Observable<Village> = Observable.from(this._villages);

    constructor() {
        this.villages.subscribe(null, null, () => {
            this.setCurrent(this._villages[0]);
        });
        this.filter();
    }

    public setCurrent(item: Village) {
        this.current.next(item);
    }

    public filter(act?: number) {
        this.currentActivity.next(act);
    }

}
