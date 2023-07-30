import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatTooltipComponent } from './views/mat-tooltip/mat-tooltip.component';

const routes: Routes = [
  {
    path: 'mat-tooltip',
    component: MatTooltipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
