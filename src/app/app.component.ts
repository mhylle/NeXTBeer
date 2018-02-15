import {Component} from '@angular/core';
import {moveIn} from "./router.animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveIn()],
})


export class AppComponent {
  title = 'NeXT Beer';

}
