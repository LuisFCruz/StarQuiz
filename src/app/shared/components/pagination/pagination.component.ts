import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input()
  page = 0;
  @Input()
  min = 0;
  @Input()
  max = 0;
  @Input()
  disabled = false;

  @Output()
  change = new EventEmitter<number>();

  constructor() {}

  get disablePrev() {
    return this.disabled || this.page <= this.min;
  }

  get disableNext() {
    return this.disabled || this.page >= this.max;
  }


  ngOnInit() {}

  goToPrev() {
    this.change.emit(this.page - 1);
  }

  goToNext() {
    this.change.emit(this.page + 1);
  }
}
