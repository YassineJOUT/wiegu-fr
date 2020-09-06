import React from "react";
import { Button, Form, Image, Icon } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

const AllConnectionForm: React.FunctionComponent<{handleClick: Function}> = ({handleClick}) => {
  return (
    <Form>
      <Form.Field>
        <Button type="button" className="signUp" color="blue">
          <Icon name="facebook" size="large" />
          Se connecter avec Facebook
        </Button>
      </Form.Field>
      <Form.Field>
        <Button type="button" className="signUp" color="red">
          <Icon name="google" size="large" />
          Se connecter avec Google
        </Button>
      </Form.Field>
      <Form.Field>
        <p className="dataField">Ou</p>
      </Form.Field>
      <Form.Field>
        <Button type="button" className="signUp" color="black" onClick={() => handleClick('login')}>
          Se connecter avec un e-mail
        </Button>
        {/* <ModalAll
          page="login"
          trigger={
            
          }
        /> */}
      </Form.Field>
      <Form.Field>
        <Button type="button" className="signUp" color="green" onClick={() => handleClick('magiclink')}>
          Se connecter avec un lien magic
          <Image
        
            src={require("../../../assets/giphyz.gif")}
            alt="gif"
            className="magic"
          />
        </Button>
        {/* <ModalAll
          page="magiclink"
          trigger={
            
          }
        /> */}
      </Form.Field>
    </Form>
  );
};

export default AllConnectionForm;
