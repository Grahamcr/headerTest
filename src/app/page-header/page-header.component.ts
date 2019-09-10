import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.less']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  currentY = '0px';
  currentX = '0px';
  private scrollSub: Subscription;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollSub = this.scrollService.scrollEmitter.subscribe(cord => {
      this.currentY = cord.getY() + 'px';
      this.currentX = cord.getX() + 'px';
      this.setPosition();
    });
  }

  ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
  }


  setPosition() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', this.currentY);
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', this.currentX);
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '4');
  }

}
