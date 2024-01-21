import { UtilsService } from '../../services/utils-service/utils.service';
import { Component, Input } from '@angular/core';
import { EButtonType } from '../button/button.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDoService } from 'src/app/services/todo-service/todo-services.service';
import { ProviderTaskService } from 'src/app/services/provider-task/provider-task.service';
import { Task } from 'src/app/services/provider-task/models/task.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private UtilsService: UtilsService, private toDoService: ToDoService, private providerTasks: ProviderTaskService){
    console.log(this.tasks);
  }
  isDraft: boolean = false;
  tasks: Task[] = [];
  addTaskForm = new FormGroup({
    title: new FormControl('', ),
    description: new FormControl('', ),
    date: new FormControl('', ),
    time: new FormControl('', ),
  });
  modalIson: boolean = false;

  @Input() containDateForm: boolean = true;

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

  sendAsNewDraft():void{
    this.sendFormData()
    this.tasks = this.providerTasks.provideTasks();
    console.log(this.tasks);
  }
  saveAsDraft():void{
    this.isDraft = true;
    this.sendFormData();
  }

  clearForm():void{
    this.modalIson = true;
    if(this.modalIson != true){
      this.addTaskForm.reset();
    }
  }
  buttonType(type: String): EButtonType{
    return this.UtilsService.buttonType(type);
  }
}
