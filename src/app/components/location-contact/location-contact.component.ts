import { Component } from '@angular/core';
import {
  faLocation,
  faMessage,
  faPhone,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location-contact',
  templateUrl: './location-contact.component.html',
  styleUrls: ['./location-contact.component.scss'],
})
export class LocationContactComponent {
  location: any;
  message: any;
  phoone: any;
  share: any;
  constructor() {
    this.location = faLocation;
    this.message = faMessage;
    this.phoone = faPhone;
    this.share = faShare;
  }
}
