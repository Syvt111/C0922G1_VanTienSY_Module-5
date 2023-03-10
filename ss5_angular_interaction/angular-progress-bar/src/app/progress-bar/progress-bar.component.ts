import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;
  @Output() value = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  loading() {
    const interval = setInterval(() => {
      this.progress = +this.progress + 5;
      // tslint:disable-next-line:triple-equals
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }

  addValue(value: number) {
   this.emit(this.value) ;
  }
}
