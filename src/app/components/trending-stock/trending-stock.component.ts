import { Component, EventEmitter, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-trending-stock',
  templateUrl: './trending-stock.component.html',
  styleUrls: ['./trending-stock.component.scss'],
  imports: [IonIcon],
})
export class TrendingStockComponent {
  @Output() toggleCard = new EventEmitter<void>();

  constructor() {}

  onStockClick() {
    this.toggleCard.emit();
  }
}
