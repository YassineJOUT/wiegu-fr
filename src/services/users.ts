import axios from "axios";
import { formValues } from "../utilities/types";
import { API_URL } from "../utilities/config";

console.log(process.env.API_URL);
const headersOptions: {} = {
  headers: { "Content-Type": "application/json" },
};

const getStore = () => {
  const endPoint: string = `${API_URL}users/getStore.php`;
  return axios.get(
    endPoint,
    headersOptions
  );
}
const signIn = (values: formValues) => {
  
  const endPoint: string = `${API_URL}users/signin.php`;
  return axios.post(
    endPoint,
    JSON.stringify({ username: values.email, password: values.password }),
    headersOptions
  );
};

const signUp = (values: formValues) => {
  const endPoint: string = `${API_URL}users/signup.php`;
  let params = new URLSearchParams();
  params.append("email", values.email);
  params.append("username", values.username || "");
  params.append(
    "password",
    values.password === undefined ? "" : values.password
  );
  return axios.post(endPoint, JSON.stringify(values), headersOptions);
};

const passwordForgotten = (email: string, confirmationCoode: string = "") => {
  const endPoint: string = "http://localhost/vato/api/users/signin.php";
  let params = new URLSearchParams();
  params.append("email", email);
  params.append("confirmationCode", confirmationCoode);
  return axios.post(endPoint + "passwordForgotten", params, headersOptions);
};

const resetPassword = (
  email: string,
  confirmationCoode: string,
  password: string
) => {
  const endPoint: string = "http://localhost/vato/api/users/signin.php";

  console.log(password);
  let params = new URLSearchParams();
  params.append("email", email);
  params.append("confirmationCode", confirmationCoode);
  params.append("password", password);

  return axios.post(endPoint + "resetPassword", params, headersOptions);
};

export const userService = {
  getStore,
  signIn,
  signUp,
  passwordForgotten,
  resetPassword,
};
