export const PASSWORD_FORGOTTEN = 'PASSWORD_FORGOTTEN';
export const PASSWORD_FORGOTTEN_SUCCESS = 'PASSWORD_FORGOTTEN_SUCCESS';
export const PASSWORD_FORGOTTEN_ERROR = 'PASSWORD_FORGOTTEN_ERROR';

export interface ICredentials{
    email: string,
    confirmationCode?: number
}

interface PasswordForgottenAction {
    type: typeof PASSWORD_FORGOTTEN
    payload: string
}
  
interface PasswordForgottenSuccessAction {
    type: typeof PASSWORD_FORGOTTEN_SUCCESS
    payload: {
        successMessage: string,
        confirmationCode: string
    }
}
  
interface PasswordForgottenErrorAction {
    type: typeof PASSWORD_FORGOTTEN_ERROR
    payload: string
}
  

export type  PasswordForgottenActionsType = PasswordForgottenAction | PasswordForgottenSuccessAction | PasswordForgottenErrorAction;



