export interface loginState{
    userInfo: userDetails,
    isLoggedIn: boolean,
    token: string,
    error: string,
    isLoading: boolean
}

export interface registerState{
    isLoading: boolean,
    error: string
}

export interface PasswordForgottenState{
    email:string,
    successMessage: string,
    isLoading: boolean,
    error: string,
    confirmationCode: string
}

export interface PasswordResetState {
    isLoading: boolean,
    error: string,
    successMessage: string
}

export interface userDetails {
    id: string,
    username : string,
    email : string,
    password? : string,
    image? : string,
    age? : number
}
