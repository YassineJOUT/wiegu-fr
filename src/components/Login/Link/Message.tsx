import React from "react";
import { Card, Form, Button, Message } from "semantic-ui-react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

// Connexion avec mot de passe

const LoginMessageForm: React.FunctionComponent<RouteComponentProps> = (
  props
) => {
  const param: any = { ...props.match.params };
  return (
    <div>
      <Form>
        <Card centered style={{ width: 450 }}>
          <Card.Content style={{ margin: 20 }}>
            <Card.Header style={{ fontSize: 22, padding: 30 }}>
              Connexion à Weigu
            </Card.Header>
            {/* <Card.Meta>Joined in 2016</Card.Meta> */}
            <Card.Description style={{ textAlign: "left" }}>
              <p>Nous vous avons envoyé un lien magique ! </p>
              <p>Nous avons envoyé un e-mail à {param.email}</p>
              <p>
                Il contient un lien magique qui vous connectera à votre compte.{" "}
              </p>
              <Link to="/login">
                <Button
                  type="submit"
                  color="teal"
                  fluid
                  size="large"
                  style={{ marginTop: 30 }}
                >
                  Connexion avec mot de passe
                </Button>
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
      </Form>
      <Message>
        <Link to="/">Retour</Link>
      </Message>
    </div>
  );
};

export default withRouter(LoginMessageForm);
