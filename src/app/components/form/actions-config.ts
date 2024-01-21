
import { EButtonType } from "../button/button.enum";
import Actions  from "./models/actions.interface";

export const action: Actions[] = [
  {
    name: 'Nova Tarefa',
    type: EButtonType.newTask,
  },
  {
    name: 'Limpar Campos',
    type: EButtonType.clearTask,
  },
  {
    name: 'Rascunho',
    type: EButtonType.saveDraft,
  },
]
