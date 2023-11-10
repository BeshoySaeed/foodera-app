import { Component } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chief-section',
  templateUrl: './chief-section.component.html',
  styleUrls: ['./chief-section.component.scss'],
})
export class ChiefSectionComponent {
  chefs: any;
  facebook: any;
  twitter: any;
  instagram: any;
  linkedin: any;

  constructor() {
    this.facebook = faFacebookF;
    this.instagram = faInstagram;
    this.twitter = faTwitter;
    this.linkedin = faLinkedin;
  }

  ngOnInit() {
    this.chefs = [
      {
        img: '../../../assets/images/chefs/first.jpeg',
        name: 'Walter White',
        position: 'Master Chef',
        letter:
          'Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.',
      },
      {
        img: '../../../assets/images/chefs/second.png',
        name: 'Sarah Jhonson',
        position: 'Patissier',
        letter:
          'Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.',
      },
      {
        img: '../../../assets/images/chefs/thirdd.jpeg',
        name: 'William Anderson',
        position: 'Cook',
        letter:
          'Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.',
      },
    ];
  }
}
