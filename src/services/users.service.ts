import axios from 'axios'
import { signUpInput } from '../types/Registration';
import { API_URL } from "../utilities/config";
import { editProfileType } from '../components/Profile/ProfileEdit/Form';
const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL
  })
const headersOptions: {} = { headers: { "Content-Type": "application/x-www-form-urlencoded" }};
 
type loginInput = {
    email: string;
    password: string;
};

type emailType = {
    email: string;
};

// const getStore = () => {
//     const endPoint: string = `${API_URL}users/getStore.php`;
//     return axios.get(
//       endPoint,
//       headersOptions
//     );
//   }

const login = (values: loginInput) => {
    let params = new URLSearchParams();
    params.append('email', values.email );
    params.append('password', values.password );
    return instance.post('users/signin', params, headersOptions);
};

const magicLink = (values: emailType) => {
    let params = new URLSearchParams();
    params.append('email', values.email );
    return instance.post('users/linkSignin', params, headersOptions);
};
const editProfile = (values: editProfileType) => {
    let params = new URLSearchParams();
    params.append('address', values.address );
    params.append('password', values.password );
    params.append('bio', values.bio );
    params.append('id', values.id || '' );
    return instance.post('users/editProfile', params, headersOptions);
};

const magicLinkVerifiy = (token: string) => {
    let params = new URLSearchParams();
    params.append('token', token );
    return instance.post('users/linkVerify', params, headersOptions);
};

const signUp = (user:signUpInput) => {
    let params = new URLSearchParams();
    params.append('email', user.email );
    params.append('username', user.username );
    params.append('password', user.password === undefined ? '' : user.password  );
    params.append('age', user.age === undefined ? '0' : user.age.toString()  );
    return instance.post('users/signup', params);
};



const passwordForgotten = (email: string,confirmationCoode: string = '') => {
    let params = new URLSearchParams();
    params.append('email', email );
    params.append('confirmationCode',confirmationCoode);
    return instance.post('users/passwordForgotten', params,headersOptions);
} 

const profile = (id: string) => {
    let params = new URLSearchParams();
    params.append('userId', id );
    return instance.post('users/profile',params, headersOptions );
} 


const resetPassword = (email: string,confirmationCoode: string, password: string) => {

    let params = new URLSearchParams();
    params.append('email', email );
    params.append('confirmationCode',confirmationCoode);
    params.append('password',password);

    return instance.post('users/resetPassword', params, headersOptions);
} 


export const userService = {
    // getStore,
    editProfile,
    magicLinkVerifiy,
    magicLink,
    profile,
    login,
    signUp,
    passwordForgotten,
    resetPassword
};