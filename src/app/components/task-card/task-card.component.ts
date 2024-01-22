import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/app/services/provider-task/models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() task!: Task;
  constructor() { }

  ngOnInit(): void {
  }

}
