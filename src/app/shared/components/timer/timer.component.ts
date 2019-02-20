import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges
} from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  duration = 0;
  @Input()
  start = false;

  @Output()
  finish = new EventEmitter();

  time: string;
  interval: Subscription;

  constructor() {}

  ngOnInit() {
    this.setTime(this.duration);
  }

  ngOnChanges(changes) {
    if (changes.start && this.start) {
      this.iniciarContagem();
    }
  }

  private setTime(duration: number) {
    this.time = this.secondsToMinutes(duration);
  }

  private iniciarContagem() {
    let leftTime = this.duration;
    this.interval = IntervalObservable.create(1000).subscribe(x => {
      leftTime -= 1;
      this.setTime(leftTime);
      if (leftTime < 1) {
        this.interval.unsubscribe();
        this.finish.emit();
      }
    });
  }

  private secondsToMinutes(seconds: number): string {
    const oneSecond = 60;
    const minute = Math.floor(seconds / oneSecond);
    const second = seconds % oneSecond;
    const minutesString = minute < 10 ? `0${minute}` : `${minute}`;
    const secondsString = second < 10 ? `0${second}` : `${second}`;
    return `${minutesString}:${secondsString}`;
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }
}
