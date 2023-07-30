import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { MatTooltipComponent } from './views/mat-tooltip/mat-tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

const MAT_MODULES = [MatTooltipModule];

@NgModule({
  declarations: [MatTooltipComponent],
  imports: [CommonModule, PlaygroundRoutingModule, ReactiveFormsModule, ...MAT_MODULES],
})
export class PlaygroundModule {}
