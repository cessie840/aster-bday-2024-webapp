import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Output() close = new EventEmitter<void>;

  constructor(
  ) { }
}
