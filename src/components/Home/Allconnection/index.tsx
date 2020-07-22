import React, { useState } from 'react'
import { Button, Form, Image, Icon } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import ModalConnection from '../ModalConnection';
const AllConnectionForm: React.FunctionComponent = () => {
  return (
    <Form>
        <Form.Field>
        <Button type='button' className="signUp" color="blue"><Icon name='facebook' size="large" />Se connecter avec Facebook</Button>
        </Form.Field>
        <Form.Field>
        <Button type='button' className="signUp" color="red"><Icon name='google' size="large" />Se connecter avec Google</Button>
        </Form.Field>
        <Form.Field>
            <p className="dataField">Ou</p>
        </Form.Field>
        <Form.Field>
            <ModalConnection/>
        </Form.Field>
        <Form.Field>
        <Button type='button' className="signUp" color="green">Se connecter avec un lien magic
        <Image
        src = {require("../../../assets/giphyz.gif")}
        alt = "gif"
        className = "magic"
        />
        </Button>
        </Form.Field>
    </Form>
  );
};

export default AllConnectionForm;
