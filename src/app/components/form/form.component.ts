import { UtilsService } from '../../services/utils-service/utils.service';
import { Component, Input } from '@angular/core';
import { EButtonType } from '../button/button.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDoService } from 'src/app/services/todo-service/todo-services.service';
import Task from 'src/app/services/provider-task/models/task.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() containDateForm: boolean = true;
  constructor(private UtilsService: UtilsService, private toDoService: ToDoService){
  }

  tasks: Task[] = [];
  addTaskForm = new FormGroup({
    title: new FormControl('', ),
    description: new FormControl('', ),
    date: new FormControl('', ),
    time: new FormControl('', ),
  });
  isDraft: boolean = false;
  modalIson: boolean = false;
  clearTask: boolean = false;

  public get title() {
    return  this.addTaskForm.get('title')?.value?.toString();
  }

  public get description(){
    return this.addTaskForm.get('description')?.value?.toString();
  }

  public get date(){
    return this.addTaskForm.get('date')?.value?.toString();
  }

  public get time(){
    return this.addTaskForm.get('time')?.value?.toString();
  }

  public get taskReturned():Task{
    return this.tasks[0];
  }
  sendFormData() {
    this.toDoService.createTask(
      this.title,
      this.description,
      this.date,
      this.time,
      this.isDraft,
    )
  }

  saveAsDraft():void{
    this.isDraft = true;
    this.sendFormData();
  }

  showClearFormDialog():void{
    this.modalIson == false ? this.modalIson = true:this.modalIson = false;
  }

  clearForm(): boolean{
    this.addTaskForm.reset();
    return this.modalIson = false;
  }

  buttonType(type: String): EButtonType{
    return this.UtilsService.buttonType(type);
  }
}
