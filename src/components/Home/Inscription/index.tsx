import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
const InscriptionForm: React.FunctionComponent = () => {
    const [startDate, setStartDate] = useState(new Date())
    const handleChange = () =>{}
  return (
    <Form>
    <Form.Field>
      <label>Nom d'utilisateur</label>
      <input placeholder="Entrer nom d'utilisateur" />
    </Form.Field>
    <Form.Field>
      <label>Adresse mail</label>
      <input type="email" placeholder="Entrer adresse mail" />
    </Form.Field>
    <Form.Field>
      <label>Mot de passe</label>
      <input type="password" placeholder="Entrer mot de passe" />
    </Form.Field>
    <Form.Field>
      <label>Anniversaire</label>
      <DatePicker selected={startDate} onChange={date  => date && setStartDate(date)} />
    </Form.Field>
    <Form.Field>
    <label>Genre</label>
    <Form.Group inline>
          <Form.Radio
            label='Homme'
            value='m'
            onChange={handleChange}
          />
          <Form.Radio
            label='Femme'
            value='f'
            onChange={handleChange}
          />
        </Form.Group>
    </Form.Field>
    <Form.Field>
    <Button type='submit' className="signUp" color="black">S'inscrire</Button>
    </Form.Field>
  </Form>
  );
};

export default InscriptionForm;
