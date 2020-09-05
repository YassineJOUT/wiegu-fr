import React, { useState, useContext } from "react";
import {
  Icon,
  Menu,
  Input,
  Sidebar,
  Ref,
  Segment,
  Image,
  Responsive,
  Container,
  Grid,
  GridRow,
  GridColumn,
} from "semantic-ui-react";
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
  // hide side bar
  return (
    <>
      <Sidebar.Pushable as={Segment} raised>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item
            link
            as="a"
            content="C'est quoi Weigu ?"
            className="redlocation"
            onClick={() => setActiveItem(1)}
          ></Menu.Item>
          <ModalAll
            trigger={
              <a href="#" className="link item con">
                Connecter
              </a>
            }
          />
          <ModalInscription
            trigger={
              <a href="#" className="link item ins">
                Inscription
              </a>
            }
          />
          {/* <Menu.Item as="a" onClick={() => disconnect()}>
            Deconnexion
          </Menu.Item> */}
        </Sidebar>
        <Ref innerRef={segmentRef}>
          <div>
            <Responsive as={Segment} {...Responsive.onlyMobile}>
              <Sidebar.Pusher>
                <Grid >
                  <GridRow textAlign='center' columns='equal' style={{marginLeft: "10px",marginRight: "10px"}}>
                    <Image
                      src={require("../../assets/weigu-logo.png")}
                      size="tiny"
                    />
                    <GridColumn  verticalAlign="middle" width={10} >
                      <Input
                        fluid
                        icon={{ name: "search", circular: true, link: true }}
                        placeholder="Search..."
                      />
                    </GridColumn>
                    <GridColumn verticalAlign="middle"  > 
                      <Icon
                        size="big"
                        name="align justify"
                        onClick={() => setVisible(visible ? false : true)}
                      />
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Sidebar.Pusher>
            </Responsive>
            <Responsive as={Segment} minWidth={Responsive.onlyTablet.minWidth}>
              <Menu stackable pointing secondary size="small">
                <Menu.Item>
                  <Image
                    src={require("../../assets/weigu-logo.png")}
                    size="tiny"
                  />
                </Menu.Item>
                <Menu.Item>
                  <Input
                    icon={{ name: "search", circular: true, link: true }}
                    placeholder="Search..."
                  />
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item
                    link
                    as="a"
                    content="C'est quoi Weigu ?"
                    className="redlocation"
                    onClick={() => setActiveItem(1)}
                  ></Menu.Item>
                  <ModalAll
                    trigger={
                      <a href="#" className="link item con">
                        Connecter
                      </a>
                    }
                  />
                  <ModalInscription
                    trigger={
                      <a href="#" className="link item ins">
                        Inscription
                      </a>
                    }
                  />
                </Menu.Menu>
              </Menu>
            </Responsive>
            {props.children}
          </div>
        </Ref>
      </Sidebar.Pushable>
    </>
  );
};

export default Topbar;
