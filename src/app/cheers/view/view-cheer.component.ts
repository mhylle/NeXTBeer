import {Component, OnInit} from '@angular/core';

import {CheerService} from "../services/cheer.service";
import {Cheer} from "../Cheer";
import {animate, style, transition, trigger} from "@angular/animations";
import {Subscription} from "rxjs/Subscription";
import {TimerObservable} from "rxjs/observable/TimerObservable";


@Component({
  selector: 'view-cheer',
  templateUrl: './view-cheer.component.html',
  styleUrls: ['./view-cheer.component.css'],
  providers: [CheerService],
  animations: [
    trigger('cheer', [
      transition(":enter", [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(":leave", [
        animate(500, style({opacity: 0}))
      ])
    ])
    // trigger('cheer', [
    //   transition(":increment", group([
    //     query(':enter', [
    //       style({ opacity: 1 }),
    //       animate(500, style({ opacity: 0 }))
    //     ]),
    //     query(':leave', [
    //       animate(500, style({ opacity: 1 }))
    //     ])
    //   ])),
    //   transition(":decrement", group([
    //     query(':enter', [
    //       style({ opacity: 1 }),
    //       animate(500, style({ opacity: 0 }))
    //     ]),
    //     query(':leave', [
    //       animate(500, style({ opacity: 1 }))
    //     ])
    //   ]))
    // ])
  ]
})
export class ViewCheerComponent implements OnInit {
  cheer: Cheer;
  cheers: Cheer[];
  shownCheers: Cheer[] = [];
  counter: number = 0;
  private timeSubscription: Subscription;

  constructor(private cheerService: CheerService) {
  }

  ngOnInit() {
    this.cheerService.getCheers().subscribe((response) => {
      if (response.length > 0) {
        let cheers = response;
        cheers.sort((a, b) => {
          let d1 = new Date(a.creationTime.year, a.creationTime.month - 1, a.creationTime.day, a.creationTime.hour, a.creationTime.minute, a.creationTime.second);
          let d2 = new Date(b.creationTime.year, b.creationTime.month - 1, b.creationTime.day, b.creationTime.hour, b.creationTime.minute, b.creationTime.second);
          return d1.valueOf() - d2.valueOf();
        });

        this.cheers = cheers;
        this.updateCheer()
      } else {
        this.cheer = null;
      }
    });
    let timer = TimerObservable.create(0, 5000);
    this.timeSubscription = timer.subscribe(t => {
      this.updateCheer();
    })
  }

  updateCheer() {
    let now = new Date();
    if (this.cheers == null) {
      this.cheer = null;
      return;
    }

    for (let i = 0; i < this.cheers.length; i++) {
      let cheer = this.cheers[i];
      let d1 = new Date(cheer.creationTime.year, cheer.creationTime.month - 1, cheer.creationTime.day, cheer.creationTime.hour, cheer.creationTime.minute, cheer.creationTime.second);
      let positiveTimeDiff = Math.abs(now.valueOf() - d1.valueOf());
      let seconds = Math.floor(positiveTimeDiff / 1000);
      let minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      let hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      if (hours == 0 && minutes < 10) {
        this.shownCheers.push(cheer);
      } else {
        this.shownCheers = this.shownCheers.filter(obj => obj !== cheer);
      }
    }
    if (this.shownCheers.length > 0) {
      this.cheer = this.shownCheers[this.counter++];
      if (this.counter >= this.shownCheers.length) {
        this.counter = 0;
      }
    } else {
      this.cheers = null;
    }
  };


}
