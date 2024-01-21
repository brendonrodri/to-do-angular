import { Injectable } from '@angular/core';
import { EButtonType } from '../../components/button/button.enum';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  buttonType(type:String):EButtonType{
    if(type === 'new-task'){
      return EButtonType.newTask;
    }
    if(type === 'clear-task'){
      return EButtonType.clearTask;
    }
    return EButtonType.saveDraft
  }
}
