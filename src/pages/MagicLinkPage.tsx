// Connexion à Weigu
// E-mail
// Mot de passe
// Connexion
// Mot de passe oublié ?
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import LinkVerify from "../components/Login/Link/LinkVerify";
import Layout from "./layouts/Layout";

const MagicLinkPage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <Layout>
      <LinkVerify />
    </Layout>
  );
};

export default MagicLinkPage;
