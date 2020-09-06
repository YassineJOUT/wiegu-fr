import React, { useState } from 'react'
import { Button, Form, Image, Icon } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";
import ModalConnection from '../ModalConnection';
import ModalMagicLink from '../ModalMagicLink';
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
        <ModalMagicLink/>
        
        </Form.Field>
    </Form>
  );
};

export default AllConnectionForm;
