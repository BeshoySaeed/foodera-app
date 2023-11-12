import { Component } from '@angular/core';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss'],
})
export class GallerySectionComponent {
  food: any;
  constructor() {
    this.food = faBowlFood;
  }
}
