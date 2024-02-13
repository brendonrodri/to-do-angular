import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card.component';
import { OptionsModalComponent } from '../options-modal/options-modal.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';



@NgModule({
  declarations: [
    TaskCardComponent,
    OptionsModalComponent,
    IconButtonComponent
  ],
  exports: [
    TaskCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskCardModule { }
