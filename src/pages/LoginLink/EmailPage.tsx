import React from "react";
import LoginEmailForm from '../../components/Login/Link/Email'
import Layout from "../layouts/Layout";
import { RouteComponentProps } from "react-router-dom";

const LoginEmailPage: React.FunctionComponent = () => (
  <Layout>
    <LoginEmailForm />
  </Layout>
);

export default LoginEmailPage;
