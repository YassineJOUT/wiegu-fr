import React from "react";
import { Button, Form, Image, Icon, Responsive } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

const AllForm: React.FunctionComponent<{
  handleClick: Function;
  type: string;
}> = ({ handleClick, type }) => {
  return (
    <Form>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Form.Field>
          <Button
            type="button"
            className="signUp"
            style={{ color: "white", backgroundColor: "#3b5998" }}
          >
            <Icon name="facebook" size="large" />
            {type !== "register" ? "Se connecter " : "S'inscrire"} avec Facebook
          </Button>
        </Form.Field>
        <Form.Field>
          <Button
            type="button"
            className="signUp"
            style={{ color: "white", backgroundColor: "#db4437"}}
          >
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
            style={{ color: "white", backgroundColor: "#444" }}
            onClick={() =>
              handleClick(type !== "register" ? "login" : "register")
            }
          >
            {type !== "register" ? "Se connecter " : "S'inscrire"} avec un
            e-mail
          </Button>
        </Form.Field>
        {type !== "register" && (
          <Form.Field>
            <Button
              style={{ color: "white", backgroundColor: "#0c6c50" }}
              type="button"
              className="signUp"
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
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Form.Field width="12">
          <Button
            type="button"
            className="signUp"
            style={{ color: "white", backgroundColor: "#3b5998" }}
          >
            <Icon name="facebook" size="large" />
            {type !== "register" ? "Se connecter " : "S'inscrire"} avec Facebook
          </Button>
        </Form.Field>
        <Form.Field width="12">
          <Button
            type="button"
            className="signUp"
            style={{ color: "white", backgroundColor: "#db4437" }}
          >
            <Icon name="google" size="large" />
            {type !== "register" ? "Se connecter " : "S'inscrire"} avec Google
          </Button>
        </Form.Field>
        <Form.Field>
          <p className="dataField">Ou</p>
        </Form.Field>
        <Form.Field width="12">
          <Button
            type="button"
            className="signUp"
            style={{ color: "white", backgroundColor: "#444" }}
            onClick={() =>
              handleClick(type !== "register" ? "login" : "register")
            }
          >
            {type !== "register" ? "Se connecter " : "S'inscrire"} avec un
            e-mail
          </Button>
        </Form.Field>
        {type !== "register" && (
          <Form.Field width="12">
            <Button
              type="button"
              className="signUp"
              style={{ color: "white", backgroundColor: "#0c6c50" }}
              onClick={() => handleClick("magiclink")}
            >
              Se connecter avec un lien magic
              <Image
                src={require("../../../assets/giphyz.gif")}
                alt="gif"
                className="magicM"
              />
            </Button>
          </Form.Field>
        )}
      </Responsive>
    </Form>
  );
};

export default AllForm;
