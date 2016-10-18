import {Activity} from './activity.enum';

export interface Village {
    title: string,
    phone: string,
    weather: number,
    followers: number,
    following: number,
    activities: Activity[],
    images?: string[]
}
