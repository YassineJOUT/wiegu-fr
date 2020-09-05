import React from "react";
import { Image, Modal, Button } from "semantic-ui-react";
import ConnectionForm from "../Connexion";
import LoginForm from "../../Login/Form";
type modalProps = {
  text: string;
  link: string;
};
const ModalConnection: React.FunctionComponent = () => (
  <Modal
    className="tiny"
    trigger={
      <Button type="button" className="signUp" color="black">
        Se connecter avec un e-mail
      </Button>
    }
    centered={false}
  >
    <Modal.Header>
      <Image src={require("../../../assets/weigu-logo.png")} size="tiny" />
      <div className="headerText">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </div>
    </Modal.Header>
    <Modal.Content>
      <LoginForm />
    </Modal.Content>
    <div className="footerModal">
      <p className="headfooter">
        <a href="#" className="spe">
          Mot de passe oublié ?
        </a>
      </p>
      <p className="secheadfooter">
        Pas encore inscrit ? <a href="#">Je m'inscris</a>
      </p>
    </div>
  </Modal>
);

export default ModalConnection;
