import { FormComponent } from './form.component';
import { ToDoService } from '../../services/todo-service/todo-services.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private toDoService: ToDoService, private formComponent: FormComponent) {

    }
    sendFormData() {
      this.toDoService.createTask(
        this.formComponent.title,
        this.formComponent.description,
        this.formComponent.date,
        this.formComponent.time,
        this.formComponent.isDraft,
      )
    }
}
