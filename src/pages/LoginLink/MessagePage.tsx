import React from "react";
import LoginMessageForm from '../../components/Login/Link/Message'
import Layout from "../layouts/Layout";
import { RouteComponentProps } from "react-router-dom";

const LoginPagePage: React.FunctionComponent<RouteComponentProps>  = () => (
  <Layout>
    <LoginMessageForm />
  </Layout>
);

export default LoginPagePage;
