import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';



@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    ItemMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenudItemsModule { }
