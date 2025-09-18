import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      'buy-chevrons': 'assets/icons/buy-chevrons.svg',
      'circle-dollar': 'assets/icons/circle-dollar.svg',
      portfolio: 'assets/icons/portfolio.svg',
      search: 'assets/icons/search.svg',
      'square-dollar': 'assets/icons/square-dollar.svg',
      target: '/assets/icons/target.svg',
      fig: 'assets/icons/FIG.svg',
    });
  }
}
