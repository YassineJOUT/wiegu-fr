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
  Divider,
} from "semantic-ui-react";
import { Context, saveState } from "../../utilities/useAuth";
import { history } from "../../utilities/history";
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
    history.push("/");
  };
  const [page, setPage] = useState("");
  // hide side bar
  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
      <Sidebar
        onShow={() => setVisible(true)}
        as={Segment}
        vertical
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        visible={visible}
        width="wide"
        style={{ backgroundColor: "#fff" }}
      >
         <span
          style={{ float: "right", cursor: "pointer", marginRight: "20px", fontSize: '18px', fontWeight: 'bolder' }}
          onClick={() => setVisible(false)}
        >
          X
        </span>

        <Image
        
          src={require("../../assets/weigu-logo.png")}
          size="tiny"
          centered
        />
       
        <br />
        <br />
        <br />
        <div className="sidebarMenu">
          <div className="sidebarMenuItem">
            <a> <Icon name="plus square outline" /> Deposer une publication</a>
          </div>
          <div className="sidebarMenuItem">
            <a> <Icon name="search" />Rechercher</a>
          </div>
        </div>
        <Divider />
        <div className="sidebarMenu">
          <div className="sidebarMenuItem">
            <a>Link </a>
          </div>
          <div className="sidebarMenuItem">
            <a>Annother link</a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Divider />
        <div className="sidebarMenu">
          <div className="sidebarMenuItem">
            <a className="redlocation">C'est quoi Weigu ?</a>
          </div>
          {!contextState.isLogged ? (
            <>
              <div className="sidebarMenuItem">
                <ModalAll
                  page={page}
                  setPage={setPage}
                  trigger={
                    <a href="#" className="link item " onClick={() => setPage("allLogin")}>
                      Connecter
                    </a>
                  }
                />
              </div>
              <div className="sidebarMenuItem">
                <ModalAll
                  
                  page={page}
                  setPage={setPage}
                  trigger={
                    <a href="#" className="link item" onClick={() => setPage("allRegister")}>
                      Inscription
                    </a>
                  }
                />
              </div>
            </>
          ) : (
            <>
              <div className="sidebarMenuItem">
                <a onClick={() => disconnect()} className="link item ins">
                  Deconnexion
                </a>
              </div>
            </>
          )}
        </div>
      </Sidebar>
      <Responsive
        as={Segment}
        {...Responsive.onlyMobile}
        style={{ margin: 0, height: "70px", paddingTop: "8px" }}
        size={"mini"}
      >
        <Sidebar.Pusher>
          <Grid>
            <GridRow
              textAlign="center"
              columns="equal"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <Image src={require("../../assets/weigu-logo.png")} size="tiny" />
              <GridColumn verticalAlign="middle" width={10}>
                <Input icon="search" fluid placeholder="Search..." />
              </GridColumn>
              <GridColumn verticalAlign="middle">
                <Icon
                  size="big"
                  name="bars"
                  onClick={() => setVisible(visible ? false : true)}
                />
              </GridColumn>
            </GridRow>
          </Grid>
        </Sidebar.Pusher>
      </Responsive>
      <Responsive
        as={Segment}
        minWidth={Responsive.onlyTablet.minWidth}
        style={{ margin: 0 }}
      >
        <Menu stackable pointing secondary size="small">
          <Menu.Item>
            <Image src={require("../../assets/weigu-logo.png")} size="tiny" />
          </Menu.Item>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              link
              as="a"
              content="C'est quoi Weigu ?"
              className="redlocation"
            ></Menu.Item>
            {!contextState.isLogged ? (
              <>
                <ModalAll
                  page="allLogin"
                  setPage={setPage}

                  trigger={
                    <a href="#" className="link item con" onClick={()=> setPage("allLogin")}>
                      Connecter
                    </a>
                  }
                />
                <ModalAll
                  page={page}
                  setPage={setPage}
                  trigger={
                    <a href="#" className="link item ins" onClick={()=> setPage("allRegister")}>
                      Inscription
                    </a>
                  }
                />
              </>
            ) : (
              <a onClick={() => disconnect()} className="link item ins">
                Deconnexion
              </a>
            )}
          </Menu.Menu>
        </Menu>
      </Responsive>
    </div>
  );
};

export default Topbar;
