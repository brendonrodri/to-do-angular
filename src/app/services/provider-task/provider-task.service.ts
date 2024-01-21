import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderTaskService {
  taskList: Task[] = [{
    id: 1,
    name: 'sasd',
    description: 'sajsiajs',
    date: 'saj3232',
    time: '9931391391',
    done: false,
    draft: false
  }];
  draftsList: Task[] = [];

  updateTaskList(newTask: Task) {
    this.taskList.push(newTask);
    console.log('Isolated task list:', this.taskList);

  }

  provideTasks(){
    return this.taskList.map(e=> e);
  }

  updateDraftList(newTask: Task) {
    this.draftsList.push(newTask);
    // console.log('Isolated drafts list:', this.draftsList);
  }

  provideDrafs():Task[]{
    return this.taskList;
  }

  constructor() {
   }
}
