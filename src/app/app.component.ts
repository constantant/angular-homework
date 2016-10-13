import {Component, ViewEncapsulation, Input} from '@angular/core';

interface Village {
    title: string,
    phone: string,
    weather: number,
    followers: number,
    following: number,
    image1: string,
    image2: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public title: string = 'Hot Weather Widget';

    public current: Village;

    public villages: Village[] = [
        {
            title: 'Title of some place',
            phone: '+1 6566 54 654',
            weather: 12,
            followers: 343,
            following: 999,
            image1: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ogi_Shirakawa02bs3200.jpg',
            image2: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Ourika_berbere_village.jpg'
        },
        {
            title: 'The Village',
            phone: '+7 6545435543543',
            weather: 14,
            followers: 233,
            following: 489,
            image1: 'http://www.isvarmurti.com/blog/wp-content/uploads/2013/11/Akha_village.jpg',
            image2: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Guri_Rajasthan_02.jpg'
        },
        {
            title: 'XXX xxxx xxxx',
            phone: '+4 2312112312312',
            weather: 33,
            followers: 444,
            following: 44,
            image1: 'https://media-cdn.tripadvisor.com/media/photo-s/01/5a/3f/73/village-view.jpg',
            image2: 'https://anthromes.wikispaces.com/file/view/life_in_china.1249650379.3_ancient-xidi-x-hongcun-villages.jpg/139496743/life_in_china.1249650379.3_ancient-xidi-x-hongcun-villages.jpg'
        },
        {
            title: 'The f....',
            phone: '+5 343243242 3423',
            weather: 23,
            followers: 35,
            following: 32,
            image1: 'https://propelsteps.files.wordpress.com/2013/10/japan-village2.jpg',
            image2: 'http://nativepakistan.com/wp-content/uploads/Photos-of-Pakistani-Villages-Photo-of-a-mud-hut-and-a-cart-in-a-fruit-garden-in-a-village-Pictures-of-Pakistani-Villages-Pakistani-Village-Life.jpg'
        }
    ];

    public onCurrent(item){
        this.current = item;
    }
}
