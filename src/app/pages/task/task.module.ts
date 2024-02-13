import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from 'src/app/components/form/form.module';
import { TaskComponent } from './task.component';
import { TaskCardModule } from 'src/app/components/task-card/task-card.module';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [
    CommonModule,
    FormModule,
    TaskCardModule
  ],
})
export class TaskModule { }
