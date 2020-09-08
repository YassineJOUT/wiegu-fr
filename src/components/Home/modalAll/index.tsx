import React, { useState } from "react";
import { Image, Modal } from "semantic-ui-react";
import AllConnectionForm from "../Allconnection";
import LoginForm from "../../Login/Form";
import RegisterForm from "../../Register/Form";
import LoginEmailForm from "../../Login/Link/Email";

type modalProps = {
  trigger: any;
  page: string;
};

const FooterInscription: React.FunctionComponent<{ handleClick: Function }> = ({
  handleClick,
}) => (
  <div className="footerModal">
    <p className="headfooter">
      <a className="pointer spe" onClick={() => handleClick("pwdForgotten")}>
        Mot de passe oublié ?
      </a>
    </p>
    <p className="secheadfooter">
      Pas encore inscrit ?{" "}
      <a className="pointer" onClick={() => handleClick("register")}>
        Je m'inscris
      </a>
    </p>
  </div>
);
const FooterLogin: React.FunctionComponent<{ handleClick: Function }> = ({
  handleClick,
}) => (
  <div className="footerModal">
    <p className="headfooter">
      Déja inscrit?{" "}
      <a className="pointer" onClick={() => handleClick("login")}>
        Je me connecte
      </a>
    </p>
    <p className="secheadfooter">
      En vous inscrivant, vous indiquez que vous acceptez les{" "}
      <a href="#">Conditions d'utilisation</a> et la{" "}
      <a href="#">Politique de confidentialité</a> de Weigu.
    </p>
  </div>
);
const ModalFooter: React.FunctionComponent<{
  page: string;
  handleClick: Function;
}> = ({ page, handleClick }) => {
  switch (page) {
    case "register":
      return <FooterLogin handleClick={handleClick} />;
    default:
      return <FooterInscription handleClick={handleClick} />;
  }
};
const ModalContent: React.FunctionComponent<{
  page: string;
  handleClick: Function;
}> = ({ page, handleClick }) => {
  switch (page) {
    case "login":
      return <LoginForm />;
    case "register":
      return <RegisterForm />;
    case "magiclink":
      return <LoginEmailForm />;
    default:
      return <AllConnectionForm handleClick={handleClick} />;
  }
};

const ModalAll: React.FunctionComponent<modalProps> = (props) => {
  const [page, setPage] = useState(props.page);
  const handleClick = (pageName: string) => {
    console.log(pageName);
    setPage(pageName);
  };
  return (
    <Modal className="tiny" trigger={props.trigger} centered={false} onClose={() => setPage("")}>
      <Modal.Header>
        <Image src={require("../../../assets/weigu-logo.png")} size="tiny" />
        <div className="headerText">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </div>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <ModalContent page={page} handleClick={handleClick} />
        </Modal.Description>
      </Modal.Content>
      <ModalFooter page={page} handleClick={handleClick} />
    </Modal>
  );
};

export default ModalAll;
