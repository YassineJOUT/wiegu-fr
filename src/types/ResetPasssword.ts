export const USER_PWD_RESET = 'USER_PWD_RESET';
export const PWD_RESET_SUCCESS = 'PWD_RESET_SUCCESS';
export const PWD_RESET_ERROR = 'PWD_RESET_ERROR';

interface PwdResetAction {
    type: typeof USER_PWD_RESET
}
  
interface PwdResetSuccessAction {
    type: typeof PWD_RESET_SUCCESS
    payload: string
}
  
interface PwdResetErrorAction {
    type: typeof PWD_RESET_ERROR
    payload: string
}
  

export type  PwdResetActionsType = PwdResetAction | PwdResetSuccessAction | PwdResetErrorAction;



