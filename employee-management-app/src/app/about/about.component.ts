import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  /* demo about emit */
  visible = true;
  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
      this.visible = !this.visible;
      if (this.visible) {
          this.open.emit(null);
      } else {
          this.close.emit(null);
      }
  }

}
