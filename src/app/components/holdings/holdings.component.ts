import { Component } from '@angular/core';
import {
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss'],
  imports: [IonList, IonItem, IonListHeader, IonLabel, IonGrid, IonRow, IonCol],
})
export class HoldingsComponent {
  constructor() {}
}
