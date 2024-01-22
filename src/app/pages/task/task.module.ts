import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from 'src/app/components/form/form.module';
import { TaskComponent } from './task.component';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [
    CommonModule,
    FormModule
  ],
})
export class TaskModule { }
