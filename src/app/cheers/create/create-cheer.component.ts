import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheerService} from "../services/cheer.service";
import {Cheer} from "../Cheer";


@Component({
  selector: 'create-cheer',
  templateUrl: './create-cheer.component.html',
  styleUrls: ['./create-cheer.component.css'],
  providers: [CheerService]
})
export class CreateCheerComponent implements OnInit {

  newCheer: Cheer = new Cheer();
  @Output()
  quoteCreated: EventEmitter<Cheer> = new EventEmitter();

  constructor(private cheerService: CheerService) {
  }

  ngOnInit() {
  }

  createCheer() {
    this.cheerService.addCheer(this.newCheer);
  }

}
