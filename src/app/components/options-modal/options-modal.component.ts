import { TaskCardComponent } from './../task-card/task-card.component';
import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMenuOptions } from './options.interface';
import IIconButton from '../icon-button/icon-button.interface';
import { OptionsModalService } from './options-modal.service';

@Component({
  selector: 'app-options-modal',
  templateUrl: './options-modal.component.html',
  styleUrls: ['./options-modal.component.css']
})
export class OptionsModalComponent implements OnInit, OnChanges {
  @Input() isOpen!: boolean;
  @HostBinding('class.modal') mainClass = 'modal';
  optionsList: IMenuOptions[] = [
    {
      name: "Done",
      alt: "Check task as done?",
      icon: {
        name: "check",
        size: {
          width: 18,
          height: 18
        }
      }
    },
    {
      name: "Draft",
      alt: "Send task for drafts list?",
      icon: {
        name: "draft",
        size: {
          width: 15,
          height: 15,
        }
      }
    },
    {
      name: "Delete",
      alt: "Delete this task?",
      icon: {
        name: "delete",
        size: {
          width: 18,
          height: 18,
        }
      }
    }
  ];
  closeButtonConfig: IIconButton ={
    width: 20,
    height: 20,
  };

  closeModal(){
    this.taskCardComponent.openMenu();
  };

  public get modalHidden():string{
    return this.isOpen ? 'block' : 'none';
  };

  constructor(private taskCardComponent: TaskCardComponent) { }

  ngOnInit(): void {
    console.log(this.isOpen)
  }
  ngOnChanges(): void {
    console.log(this.isOpen)
  }

}
