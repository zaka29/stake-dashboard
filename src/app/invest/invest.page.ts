import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animation, AnimationController } from '@ionic/angular';
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HoldingsComponent } from '../components/holdings/holdings.component';
import { TotalEquityComponent } from '../components/total-equity/total-equity.component';
import { TrendingStockComponent } from '../components/trending-stock/trending-stock.component';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.page.html',
  styleUrls: ['./invest.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    TotalEquityComponent,
    HoldingsComponent,
    TrendingStockComponent,
    IonCard,
    IonButton,
  ],
})
export class InvestPage implements AfterViewInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;
  private animationCtrl = inject(AnimationController);
  cardVisible = false;

  constructor() {}

  ngAfterViewInit(): void {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(300)
      .easing('ease-out')
      .fromTo('transform', 'translateY(100vh)', 'translateY(0)');
  }

  toggleCard() {
    if (this.cardVisible) {
      this.animation.direction('reverse').play();
    } else {
      this.animation.direction('normal').play();
    }
    this.cardVisible = !this.cardVisible;
  }
}
