import React from "react";
import { Card, Form, Button, Message } from "semantic-ui-react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

// Connexion avec mot de passe

const LoginMessage: React.FunctionComponent<{email: string}> = (
  props
) => {
  //const param: any = { ...props.match.params };
  return (
    <>
      <p>Nous vous avons envoyé un lien magique ! </p>
      <p>Nous avons envoyé un e-mail à {props.email}</p>
      <p>Il contient un lien magique qui vous connectera à votre compte. </p>
    </>
  );
};

export default LoginMessage;
