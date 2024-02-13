import { Component, HostBinding, Input, OnInit, Output } from '@angular/core';
import IIconButton from './icon-button.interface';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() iconName!: string;
  @Input() size!: IIconButton;
  @Input() margin?: number;

  public get iconPath():string{
    return `assets/images/${this.iconName}.png`;
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.iconPath);
    console.log(this.size);
  }

}
