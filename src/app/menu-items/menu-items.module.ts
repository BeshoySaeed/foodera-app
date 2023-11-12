import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { MenuComponent } from './menu/MenuComponent';
import { ItemDataComponent } from './item-data/item-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ItemComponent, MenuComponent, ItemDataComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class MenuItemsModule {}
