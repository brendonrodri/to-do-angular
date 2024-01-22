import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from './task.service';
import Task from 'src/app/services/provider-task/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  taskList :Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskList$().subscribe(tasks=> this.taskList = tasks);
    console.log(this.taskList);
  }

}
