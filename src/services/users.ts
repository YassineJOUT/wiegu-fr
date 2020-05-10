import axios from "axios";
import { formValues } from "../utilities/types";


const headersOptions: {} = {
  headers: { "Content-Type": "application/json" },
};

const login = (email: string, password: string) => {
  const endPoint: string = "http://localhost/vato/api/users/signin.php";
  let params = new URLSearchParams();
  console.log("login");
  params.append("email", email);
  params.append("password", password);
  return axios.post(endPoint + "signin", params, headersOptions);
};

const signUp = (values: formValues) => {
  const endPoint: string = "http://localhost:8080/VATO/api/users/signup.php";
  let params = new URLSearchParams();
  params.append("email", values.email);
  params.append("username", values.username);
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
  login,
  signUp,
  passwordForgotten,
  resetPassword,
};
