import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsModalService {
  isOpen: boolean = false;

  openModal():boolean{
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    return this.isOpen;
  }
  closeModal():boolean{
    return this.isOpen = false;
  }

  constructor() { }
}
