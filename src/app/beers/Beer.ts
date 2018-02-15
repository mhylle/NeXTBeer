import {Brewery} from "./breweries/Brewery";

export class Beer {
  key: string;
  id: number;
  name: string;
  link?: string;
  imageUrl?: string;
  brewery: Brewery;
  description: string;
  type: string;
}
