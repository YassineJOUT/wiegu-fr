import React from 'react'
import { Image, Modal } from 'semantic-ui-react'
import InscriptionForm from '../Inscription'
type modalProps =  {
    text : string,
    link : string
}
const ModalInscription: React.FunctionComponent  = () => (
  <Modal className="tiny" trigger={<a href="#" className="link item" >Inscription</a>} centered={false}>
    <Modal.Header><Image 
              src={require("../../../assets/weigu-logo.png")}
              size='tiny'
               />
            <div className="headerText">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
               </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <InscriptionForm/>
      </Modal.Description>
    </Modal.Content>
    <div className="footerModal">
       <p className="headfooter"> Déja inscrit? <a href="#">Je me connecte</a></p>
        <p className="secheadfooter">En vous inscrivant, vous indiquez que vous acceptez les <a href="#">Conditions d'utilisation</a> et la <a href="#">Politique de confidentialité</a> de Weigu.</p>
    </div>
  </Modal>
)

export default ModalInscription