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
        name: 'chicken',
        description: '3 pieces',
        price: 200,
      },
      {
        name: 'beef',
        description: '2 pieces',
        price: 100,
      },
      {
        name: 'meat',
        description: '6 pieces',
        price: 500,
      },
      {
        name: 'ball roll',
        description: '3 pieces',
        price: 200,
      },
      {
        name: 'hamburger',
        description: '3 pieces',
        price: 607,
      },
      {
        name: 'chicken',
        description: '3 pieces',
        price: 200,
      },
      {
        name: 'chicken',
        description: '3 pieces',
        price: 200,
      },
    ];
  }
}
