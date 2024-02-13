import { Injectable } from '@angular/core';
import Task from './provider-task/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private TASKS_KEY = 'tasks';

  constructor() { }

  saveTasks(tasks: Task[]) {
    localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
  }

  getTasks(): Task[] | null {
    const tasksString = localStorage.getItem(this.TASKS_KEY);
    return tasksString ? JSON.parse(tasksString) : null;
  }
}
