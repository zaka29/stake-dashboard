import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animation, AnimationController } from '@ionic/angular';
import {
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HoldingsComponent } from '../../components/holdings/holdings.component';
import { SwipeToConfirmComponent } from '../../components/swipe-to-confirm/swipe-to-confirm.component';
import { TotalEquityComponent } from '../../components/total-equity/total-equity.component';
import { TrendingStockComponent } from '../../components/trending-stock/trending-stock.component';

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
    SwipeToConfirmComponent,
    IonCard,
    IonInput,
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

  placeOrder() {
    console.log('Order confirmed!');
    this.toggleCard();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.cardVisible) return;

    const target = event.target as HTMLElement;
    const cardEl = this.card?.nativeElement;
    if (cardEl && !cardEl.contains(target)) {
    }
  }
}
