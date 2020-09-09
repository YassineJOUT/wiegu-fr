import React from "react";
import { Button, Form, Image, Icon } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

const AllForm: React.FunctionComponent<{
  handleClick: Function;
  type: string;
}> = ({ handleClick, type }) => {
  return (
    <Form>
      <Form.Field>
        <Button type="button" className="signUp" color="blue">
          <Icon name="facebook" size="large" />
          {type !== "register" ? "Se connecter " : "S'inscrire"} avec Facebook
        </Button>
      </Form.Field>
      <Form.Field>
        <Button type="button" className="signUp" color="red">
          <Icon name="google" size="large" />
          {type !== "register" ? "Se connecter " : "S'inscrire"} avec Google
        </Button>
      </Form.Field>
      <Form.Field>
        <p className="dataField">Ou</p>
      </Form.Field>
      <Form.Field>
        <Button
          type="button"
          className="signUp"
          color="black"
          onClick={() => handleClick(type !== "register" ? "login" : "register")}
        >
           {type !== "register" ? "Se connecter " : "S'inscrire"} avec un e-mail
        </Button>
      </Form.Field>
      {type !== "register" && (
        <Form.Field>
          <Button
            type="button"
            className="signUp"
            color="green"
            onClick={() => handleClick("magiclink")}
          >
            Se connecter avec un lien magic
            <Image
              src={require("../../../assets/giphyz.gif")}
              alt="gif"
              className="magic"
            />
          </Button>
        </Form.Field>
      )}
    </Form>
  );
};

export default AllForm;
