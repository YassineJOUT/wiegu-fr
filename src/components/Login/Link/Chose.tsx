import React from "react";
import { Card, Form, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
// Nous vous avons envoyé un lien magique !
// Nous avons envoyé un e-mail à monadresse@mail.com
// Il contient un lien magique qui vous connectera à votre compte.
// Connexion avec mot de passe

const LoginChoseForm: React.FunctionComponent = () => (
  <div>
    <Form>
      <Card centered style={{ width: 450 }}>
        <Card.Content style={{ margin: 20 }}>
          <Card.Header style={{ fontSize: 22, padding: 30 }}>
            Connexion à Weigu
          </Card.Header>
          {/* <Card.Meta>Joined in 2016</Card.Meta> */}
          <Card.Description>
            <Link to="/login-link">
              <Button
                color="grey"
                fluid
                size="large"
                style={{ marginBottom: 20 }}
              >
                Obtenir un lien magique
              </Button>
            </Link>
            <Link to="/login">
              <Button type="submit" color="teal" fluid size="large">
                Connexion avec mot de passe
              </Button>
            </Link>
          </Card.Description>
        </Card.Content>
      </Card>
    </Form>
    <Message>
      <Link to="/login">Retour</Link>
    </Message>
  </div>
);

export default LoginChoseForm;
