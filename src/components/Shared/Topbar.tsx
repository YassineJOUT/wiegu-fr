import React, { useState, useContext } from "react";
import { Icon, Menu, Input, Sidebar, Ref, Segment, Image } from "semantic-ui-react";
import { Context, saveState } from "../../utilities/useAuth";
import { history } from "../../utilities/history";
import ModalInscription from "../Home/ModalInscription";
import ModalConnection from "../Home/ModalConnection";
import ModalAll from "../Home/modalAll";


const Topbar: React.FunctionComponent = (props) => {
  const { contextState, setContext } = useContext(Context);
  const [activeItem, setActiveItem] = useState(1);
  const [visible, setVisible] = useState(false);
  const segmentRef = React.useRef();

  const disconnect = () => {
    const v = {
      contextState: {
        isLogged: false,
        user: {
          id: "",
          role: "",
        },
      },
      setContext,
    };
    setContext(v);
    saveState(v);
    history.push("/login");
  };
  return (
    <div>
      {}
      <Sidebar.Pushable as={Segment.Group} raised>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          target={segmentRef}
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">Menu Item 1</Menu.Item>
          <Menu.Item as="a">Menu Item 2</Menu.Item>
          <Menu.Item as="a">Menu Item 3</Menu.Item>
          <Menu.Item as="a" onClick={() => disconnect()}>
            Deconnexion
          </Menu.Item>
        </Sidebar>

        <Ref innerRef={segmentRef}>
          <div>
            <Segment>
              <Menu pointing secondary size="small">
              {/*<Menu.Item onClick={() => setVisible(visible ? false : true)}>
                  <Icon size="big" name="align justify" />
  </Menu.Item>*/}
              <Menu.Item>
              <Image 
              src={require("../../assets/weigu-logo.png")}
              size='tiny'
               />
                  </Menu.Item>
              <Menu.Item>
                    <Input
                      icon={{ name: 'search', circular: true, link: true }}
                      placeholder='Search...'
                    />
                  </Menu.Item>
                <Menu.Menu position="right">
                  
                  <Menu.Item link
                  href = "youtube.com"
                  as="a"
                  content="C'est quoi Weigu ?"
                  className = "redlocation"
                  onClick={() => setActiveItem(1)}
                >
                  
                </Menu.Item>
                <ModalAll trigger={<a href="#" className="link item con" >Connecter</a>}/>
                <ModalInscription trigger={<a href="#" className="link item ins" >Inscription</a>}/>
                </Menu.Menu>
              </Menu>
            </Segment>
            {props.children}
          </div>
        </Ref>
      </Sidebar.Pushable>
    </div>
  );
};

export default Topbar;
