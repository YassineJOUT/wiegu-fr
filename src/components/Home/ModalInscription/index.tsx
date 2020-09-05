import React from 'react'
import { Image, Modal } from 'semantic-ui-react'
import RegisterForm from '../../Register/Form'
type modalProps =  {
  trigger : any,
}
const ModalInscription: React.FunctionComponent<modalProps>   = (props) => (
  <Modal className="tiny" trigger={props.trigger} centered={false}>
    <Modal.Header><Image 
              src={require("../../../assets/weigu-logo.png")}
              size='tiny'
               />
            <div className="headerText">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
               </Modal.Header>
    <Modal.Content>
        <RegisterForm/>
    </Modal.Content>
    <div className="footerModal">
       <p className="headfooter"> Déja inscrit? <a href="#">Je me connecte</a></p>
        <p className="secheadfooter">En vous inscrivant, vous indiquez que vous acceptez les <a href="#">Conditions d'utilisation</a> et la <a href="#">Politique de confidentialité</a> de Weigu.</p>
    </div>
  </Modal>
)

export default ModalInscription