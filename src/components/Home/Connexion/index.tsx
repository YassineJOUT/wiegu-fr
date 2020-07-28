import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
const ConnectionForm: React.FunctionComponent = () => {
  return (
    <Form>
        <Form.Field>
        <label>Adresse mail</label>
        <input type="email" placeholder="Entrer adresse mail" />
        </Form.Field>
        <Form.Field>
        <label>Mot de passe</label>
        <input placeholder="Entrer mot de passe" />
        </Form.Field>
        <Form.Field>
        <Button type='submit' className="signUp" color="black">Se connecter</Button>
        </Form.Field>
    </Form>
  );
};

export default ConnectionForm;
