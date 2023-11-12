import { Component, Input } from '@angular/core';
import { faH, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  heart: any;
  @Input() card: any;
  constructor() {
    this.heart = faHeart;
  }
}
