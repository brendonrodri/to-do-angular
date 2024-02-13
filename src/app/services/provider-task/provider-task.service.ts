import { Injectable } from '@angular/core';
import Task  from './models/task.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderTaskService {
  private taskListSubject = new BehaviorSubject<Task[]>([
  ]);

  constructor(private localStorageService: LocalStorageService) {
    const savedTasks = this.localStorageService.getTasks();
    if (savedTasks) {
      this.taskListSubject.next(savedTasks);
    }
  }

  get provideTasks() {
    return this.taskListSubject.asObservable();
  }
  draftsList: Task[] = [{
    id: 1,
    name: 'sasd',
    description: 'sajsiajs',
    date: 'saj3232',
    time: '9931391391',
    done: false,
    draft: false
  }];

  updateTaskList(newTask: Task) {
    this.taskListSubject.next([...this.taskListSubject.value, newTask]);
    this.localStorageService.saveTasks(this.taskListSubject.value);
    console.log('Isolated task list:', this.taskListSubject.value);
  }

  updateDraftList(newTask: Task) {
    this.draftsList.push(newTask);
  }

  provideDrafs():Task[]{
    return this.draftsList;
  }


}
