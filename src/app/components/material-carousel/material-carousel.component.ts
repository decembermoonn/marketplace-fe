import { Component } from '@angular/core';

@Component({
  selector: 'mkt-material-carousel',
  templateUrl: './material-carousel.component.html',
  styleUrls: ['./material-carousel.component.scss']
})
export class MaterialCarouselComponent {
  i = 0;

  changeColor(div: HTMLDivElement): void {
    div.style.backgroundColor = ['red', 'yellow'][(this.i++) % 2];
  }
}
