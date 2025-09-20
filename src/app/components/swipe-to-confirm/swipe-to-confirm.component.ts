import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-swipe-to-confirm',
  templateUrl: './swipe-to-confirm.component.html',
  styleUrls: ['./swipe-to-confirm.component.scss'],
  imports: [IonIcon],
})
export class SwipeToConfirmComponent {
  @Output() confirmed = new EventEmitter<void>();
  @ViewChild('track') track!: ElementRef<HTMLDivElement>;

  knobX = 0;
  private dragging = false;
  private startX = 0;
  private maxX = 0;

  startDrag(e: TouchEvent | MouseEvent) {
    const clientX = (e as TouchEvent).touches
      ? (e as TouchEvent).touches[0].clientX
      : (e as MouseEvent).clientX;

    this.dragging = true;
    this.startX = clientX - this.knobX;
    this.maxX = this.track.nativeElement.offsetWidth - 48;
    e.preventDefault();
  }

  @HostListener('document:touchmove', ['$event'])
  @HostListener('document:mousemove', ['$event'])
  onMove(e: TouchEvent | MouseEvent) {
    if (!this.dragging) return;
    const clientX = (e as TouchEvent).touches
      ? (e as TouchEvent).touches[0].clientX
      : (e as MouseEvent).clientX;

    let x = clientX - this.startX;
    x = Math.max(0, Math.min(x, this.maxX));
    this.knobX = x;
  }

  @HostListener('document:touchend')
  @HostListener('document:mouseup')
  endDrag() {
    if (!this.dragging) return;
    this.dragging = false;

    if (this.knobX >= this.maxX * 0.9) {
      this.confirmed.emit();
      setTimeout(() => {
        this.knobX = 0;
      }, 200);
    } else {
      this.knobX = 0;
    }
  }
}
