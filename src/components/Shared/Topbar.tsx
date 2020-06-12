import React, { useState } from "react";
import {
  Icon,
  Menu,
  Input,
  Sidebar,
  Ref,
  Segment,
} from "semantic-ui-react";

const Topbar: React.FunctionComponent = (props) => {
  const [activeItem, setActiveItem] = useState(1);
  const [visible, setVisible] = useState(false);
  const segmentRef = React.useRef();
  return (
    <div>
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
          <Menu.Item as="a">Menu Item 4</Menu.Item>
        </Sidebar>

        <Ref innerRef={segmentRef}>
          <div>
            <Segment>
              <Menu pointing secondary size="small" >
                <Menu.Item
                  as="a"
                  name="home"
                  active={activeItem === 1}
                  onClick={() => setActiveItem(1)}
                >
                  <Icon size="big" name="home" />
                </Menu.Item>
                <Menu.Item
                  as="a"
                  name="user"
                  active={activeItem === 2}
                  onClick={() => setActiveItem(2)}
                >
                  <Icon size="big" name="user circle" />
                </Menu.Item>
                <Menu.Item
                  as="a"
                  name="messages"
                  active={activeItem === 3}
                  onClick={() => setActiveItem(3)}
                >
                  <Icon size="big" name="copy outline" />
                </Menu.Item>
                <Menu.Item
                  as="a"
                  name="notification"
                  active={activeItem === 4}
                  onClick={() => setActiveItem(4)}
                >
                  <Icon size="big" name="mail outline" />
                </Menu.Item>
                <Menu.Item
                  as="a"
                  name="Weigu"
                >
               <div className="center aligned  column">
                    <h1>Wirgu</h1>

                </div>
                </Menu.Item>
                {/*  */}
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Input
                      className="icon"
                      icon="search"
                      placeholder="Search for a user..."
                    />
                  </Menu.Item>
                  <Menu.Item onClick={() => setVisible(visible ? false : true)}>
                    <Icon size="big" name="align justify" />
                  </Menu.Item>
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
