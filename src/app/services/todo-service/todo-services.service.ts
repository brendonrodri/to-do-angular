import { Injectable } from '@angular/core';
import { ProviderTaskService } from '../provider-task/provider-task.service';
import Task from '../provider-task/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor( private providerTaks: ProviderTaskService) {
  }

  createTask( name: string | undefined, description: string | undefined, date: string | undefined, time: string | undefined, draft: boolean){
    const taskId = Math.random();
    let newTask: Task = {
      id: taskId,
      name: name,
      description: description,
      date: date,
      time: time,
      done: false,
      draft: draft
    }

    if(newTask.draft === false){
      this.saveNewtask(newTask);
    }
    if(newTask.draft === true){
      this.saveAsDraft(newTask);
    }

  }

  saveNewtask(newTask:Task){
    this.providerTaks.updateTaskList(newTask);
  }
  saveAsDraft(newTask:Task){
    this.providerTaks.updateDraftList(newTask);
  }

}
