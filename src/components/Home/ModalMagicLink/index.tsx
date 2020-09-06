import React from "react";
import { Image, Modal, Button } from "semantic-ui-react";
import LoginEmailForm from "../../Login/Link/Email";

const ModalMagicLink: React.FunctionComponent = () => (
  <Modal
    className="tiny"
    trigger={
      <Button type="button" className="signUp" color="green">
        Se connecter avec un lien magic
        <Image
          src={require("../../../assets/giphyz.gif")}
          alt="gif"
          className="magic"
        />
      </Button>
    }
  >
    <Modal.Header>
      <Image src={require("../../../assets/weigu-logo.png")} size="tiny" />
      <div className="headerText">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </div>
    </Modal.Header>
    <Modal.Content>
      <LoginEmailForm />
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

export default ModalMagicLink;
