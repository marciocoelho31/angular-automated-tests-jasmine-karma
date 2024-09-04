import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../unique-id.service';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService]
})
export class LikeWidgetModule {}
