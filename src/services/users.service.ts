import axios from 'axios'
import { signUpInput } from '../types/Registration';

const api_url: string = 'http://localhost:3005/users/';
const headersOptions: {} = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };
 
type loginInput = {
    email: string;
    password: string;
};

const getStore = () => {
    const endPoint: string = `${api_url}users/getStore.php`;
    return axios.get(
      endPoint,
      headersOptions
    );
  }

const login = (valuse: loginInput) => {
    let params = new URLSearchParams();
    console.log('login');
    params.append('email', valuse.email );
    params.append('password', valuse.password );
    return axios.post(api_url+'signin', params, headersOptions);
};

const signUp = (user:signUpInput) => {
    let params = new URLSearchParams();
    params.append('email', user.email );
    params.append('username', user.username );
    params.append('password', user.password === undefined ? '' : user.password  );
    params.append('age', user.age === undefined ? '0' : user.age.toString()  );
    return axios.post('http://localhost:3005/users/signup', params);
};



const passwordForgotten = (email: string,confirmationCoode: string = '') => {
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('confirmationCode',confirmationCoode);
    return axios.post(api_url+'passwordForgotten', params,headersOptions);
} 


const resetPassword = (email: string,confirmationCoode: string, password: string) => {

    console.log('resetPassword');
    console.log(email);
    console.log(confirmationCoode);
    console.log(password);
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('confirmationCode',confirmationCoode);
    params.append('password',password);


    return axios.post(api_url+'resetPassword', params, headersOptions);
} 


export const userService = {
    getStore,
    login,
    signUp,
    passwordForgotten,
    resetPassword
};