import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicButtonComponent } from './topic-button/topic-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TopicButtonComponent
  ],
  exports: [
    TopicButtonComponent
  ]
})
export class SharedUiModule {}
