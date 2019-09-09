import { Component, HostListener } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ScrollService } from './scroll.service';
import { Cord } from './cord.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  constructor(private scrollService: ScrollService) {

  }

  lastX = 0;
  lastY = 0;
  lastDirection = 'n';
  currentDirection = 'n';

  @HostListener('window:scroll', [])
    handleScroll() {

    const currentY = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;

    const currentX = window.pageXOffset
          || document.documentElement.scrollLeft
          || document.body.scrollLeft || 0;

    // Looks like we are scrolling up or down
    if (this.lastY !== currentY) {
      this.scrollService.scrollEmitter.next(new Cord(currentX, 0, true));
      this.scrollService.columnHeaderEmitter.next(new Cord(currentX, currentY, true));
      this.lastY = currentY;
    }

    // Looks like we are scrolling left or right
    if (this.lastX !== currentX) {

      // Let the page header know we need to move it
      this.scrollService.scrollEmitter.next(new Cord(currentX, currentY, false));
      this.scrollService.columnHeaderEmitter.next(new Cord(currentX, currentY, false));
      this.lastX = currentX;
    }
  }

}

