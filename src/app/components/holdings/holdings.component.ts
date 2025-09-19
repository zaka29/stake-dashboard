import { Component } from '@angular/core';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss'],
  imports: [IonGrid, IonRow, IonCol],
})
export class HoldingsComponent {
  constructor() {}
}
