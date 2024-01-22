import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { FormModule } from 'src/app/components/form/form.module';
import { ProviderTaskService } from 'src/app/services/provider-task/provider-task.service';
import { TaskComponent } from '../task/task.component';

@NgModule({
  declarations: [
    NotesComponent,
  ],
  exports: [
    NotesComponent,
  ],
  imports: [
    CommonModule,
    FormModule,
  ]
})
export class NotesModule { }
