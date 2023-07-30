import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

// todo - experiment with test harness
@Component({
  selector: 'mkt-mat-tooltip',
  templateUrl: './mat-tooltip.component.html',
  styleUrls: ['./mat-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MatTooltipComponent {
  // MAT_TOOLTIP_DEFAULT_OPTIONS provider can be configured
  // tooltipDefaultOptions: MatTooltipDefaultOptions = { ... }
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  tooltipPosition = new FormControl(this.positionOptions[0], { nonNullable: true });
  tooltipDisabled = new FormControl(false, { nonNullable: true });
}
