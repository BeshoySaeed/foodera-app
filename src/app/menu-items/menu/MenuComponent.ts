import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: any;
  constructor() {
    this.items = [
      {
        img: '../../../assets/images/food-gallery/f-3.jpeg',
        name: 'chicken',
        description: '3 pieces',
        price: 200,
      },
      {
        img: '../../../assets/images/food-gallery/f-5.jpeg',
        name: 'beef',
        description: '2 pieces',
        price: 100,
      },
      {
        img: '../../../assets/images/food-gallery/f-6.jpeg',
        name: 'meat',
        description: '6 pieces',
        price: 500,
      },
      {
        img: '../../../assets/images/food-gallery/ff.jpeg',
        name: 'ball roll',
        description: '3 pieces',
        price: 200,
      },
      {
        img: '../../../assets/images/food-gallery/fff.jpeg',
        name: 'hamburger',
        description: '3 pieces',
        price: 607,
      },
      {
        img: '../../../assets/images/food-gallery/ffff.jpeg',
        name: 'chicken',
        description: '3 pieces',
        price: 200,
      },
      {
        img: '../../../assets/images/food-gallery/f-3.jpeg',
        name: 'chicken',
        description: '3 pieces',
        price: 200,
      },
    ];
  }
}
