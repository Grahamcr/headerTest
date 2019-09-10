import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-column-headers',
  templateUrl: './column-headers.component.html',
  styleUrls: ['./column-headers.component.less']
})
export class ColumnHeadersComponent implements OnInit, OnDestroy {
  currentY = '0px';
  currentX = '0px';
  private yScrollSub: Subscription;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private scrollService: ScrollService) { }

  ngOnInit() {
    this.yScrollSub = this.scrollService.columnHeaderEmitter.subscribe(cord => {
      this.currentY = (cord.getY()) + 'px';
      this.currentX = '-' + cord.getX() + 'px';
      cord.getRelative() ?  this.handleVerticalScroll() : this.handleHorizontalScroll();
    });
  }

  ngOnDestroy(): void {
    this.yScrollSub.unsubscribe();
  }


  handleHorizontalScroll() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', this.currentY);
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '-1');
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-left', '0px');
  }

  handleVerticalScroll() {
    console.log('Value of CurrentX: ' + this.currentX);
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-left', this.currentX);
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '-1');
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', '0px');
  }
}
