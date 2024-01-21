import { Component, Input, OnInit } from '@angular/core';
import  {EButtonType} from './button.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonName: string = '';
  @Input() buttonType: EButtonType = EButtonType.newTask;
  @Input() buttonFunction: any;

  constructor() { }

  ngOnInit(): void {
  }

}
