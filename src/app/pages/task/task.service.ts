import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Task from 'src/app/services/provider-task/models/task.model';
import { ProviderTaskService } from 'src/app/services/provider-task/provider-task.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private providerTaskService: ProviderTaskService) { }

  getTaskList$(): Observable<Task[]> {
    return this.providerTaskService.provideTasks
  }

  // Restante do código...
}
