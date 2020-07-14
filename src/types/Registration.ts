export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';

export interface signUpInput{
    id?: string,
    username : string,
    email : string,
    password? : string,
    image? : string,
    age? : number
}


interface UserSignupAction {
    type: typeof USER_SIGNUP
    payload: signUpInput
}
  
interface UserSignupSuccessAction {
    type: typeof USER_SIGNUP_SUCCESS
    payload: string
}
  
interface UserSignupErrorAction {
    type: typeof USER_SIGNUP_ERROR
    payload: string
}
  

export type  SignupActionsType = UserSignupAction | UserSignupSuccessAction | UserSignupErrorAction;



