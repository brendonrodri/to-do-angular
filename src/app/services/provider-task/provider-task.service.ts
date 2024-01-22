import { Injectable } from '@angular/core';
import Task  from './models/task.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProviderTaskService {
  private taskListSubject = new BehaviorSubject<Task[]>([
    // initial tasks...
  ]);
  get provideTasks() {
    return this.taskListSubject.asObservable();
  }
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
    this.taskListSubject.next([...this.taskListSubject.value, newTask]);
    console.log('Isolated task list:', this.taskListSubject.value);
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
