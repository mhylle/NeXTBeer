import {Beer} from "../beers/Beer";
import {User} from "../users/User";

export class Tasting {
  key: string;
  id: string;
  name: string;
  beer: Beer;
  giver: User;
  attendees: User[];
  time: {
    day: number,
    month: number,
    year: number,
    hour: number,
    minute: number
  };
  creationTime: {
    day: number,
    month: number,
    year: number,
    hour: number,
    minute: number
  };
  datetime?: Date;
  location: string;
}
