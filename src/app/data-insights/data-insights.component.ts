import { Component, OnInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-data-insights',
  templateUrl: './data-insights.component.html',
  styleUrls: ['./data-insights.component.less']
})
export class DataInsightsComponent implements OnInit, OnDestroy {

  currentY = '0px';
  currentX = '0px';
  private scrollSub: Subscription;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollSub = this.scrollService.scrollEmitter.subscribe(cord => {
      this.currentY = '-' + cord.getY() + 'px';
      this.currentX = cord.getX() + 'px';
      cord.getRelative() ?  this.setRelativePosition() : this.setFixedPosition();
    });
  }

  ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
  }


  setFixedPosition() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', '0px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '3');
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-top', this.currentY);
  }

  setRelativePosition() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', this.currentX);
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-top', '0px');
  }

}
