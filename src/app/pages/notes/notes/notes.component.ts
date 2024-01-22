import { Component, OnChanges, OnInit } from '@angular/core';
import { ProviderTaskService } from 'src/app/services/provider-task/provider-task.service';
import Task from 'src/app/services/provider-task/models/task.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnChanges {

  constructor( private providerTask: ProviderTaskService) { }

  taskList: Task[] = [];
  getTask(){
    this.taskList = this.providerTask.taskList;
  }
  ngOnChanges(): void {
    this.getTask()
  }

}
