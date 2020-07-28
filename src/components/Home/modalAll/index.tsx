import React from 'react'
import { Image, Modal } from 'semantic-ui-react'
import AllConnectionForm from '../Allconnection'

type modalProps =  {
    trigger : any,
}
const ModalAll: React.FunctionComponent<modalProps>  = (props) => (
  <Modal className="tiny" trigger={props.trigger} centered={false}>
    <Modal.Header><Image 
              src={require("../../../assets/weigu-logo.png")}
              size='tiny'
               />
            <div className="headerText">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
               </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <AllConnectionForm/>
      </Modal.Description>
    </Modal.Content>
    <div className="footerModal">
       <p className="headfooter"><a href="#" className="spe">Mot de passe oublié ?</a></p>
        <p className="secheadfooter">Pas encore inscrit ? <a href="#">Je m'inscris</a></p>
    </div>
  </Modal>
)

export default ModalAll