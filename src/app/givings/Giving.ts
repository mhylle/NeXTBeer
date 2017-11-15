import {Beer} from "../beers/Beer";
import {User} from "../users/User";

export class Giving {
  beer: Beer;
  giver: User;
  attendees: User[];
  time: {
    day: number,
    month: number,
    year: number,
    hour: number,
    minute: number
  }
  location: string;
}
