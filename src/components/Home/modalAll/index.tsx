import React, { useState } from "react";
import { Image, Modal, Icon } from "semantic-ui-react";
import AllForm from "../Allconnection";
import LoginForm from "../../Login/Form";
import RegisterForm from "../../Register/Form";
import LoginEmailForm from "../../Login/Link/Email";

type modalProps = {
  trigger?: any;
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
    case "allRegister":
      return <AllForm type="register" handleClick={handleClick} />;
    default:
      return <AllForm type="login" handleClick={handleClick} />;
  }
};

const ModalAll: React.FunctionComponent<modalProps> = (props) => {
  const [page, setPage] = useState(props.page);
  const [open, setOpen] = React.useState(false);
  const handleClick = (pageName: string) => {
    setPage(pageName);
  };
  return (
    <Modal
      className="tiny"
      trigger={props.trigger}
      onClose={() => {
        setPage(
          props.page === "login" || props.page === "magiclink"
            ? "allLogin"
            : "allRegister"
        );
        setOpen(false);
      }}
      open={open}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>
        <span
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => setOpen(false)}
        >
          X
        </span>
        {page !== "allRegister" && page !== "allLogin" && (
          <span
            style={{ float: "left", cursor: "pointer" }}
            onClick={() => setOpen(false)}
          >
            <Icon name="angle left" />
          </span>
        )}
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
