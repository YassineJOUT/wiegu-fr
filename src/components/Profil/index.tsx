import React, { useState } from "react";
import {  Divider, Sidebar, Menu, Icon } from "semantic-ui-react";
import PropTypes from 'prop-types'
enum directions {
    "Left","Right","Top","Bottom"
}
type SidebarProp= {
    animation: string,
    direction: directions.Left,
    visible: boolean,
  }
const Profile: React.FunctionComponent = (props) => {

    const [visible, setVisible] = useState(false);
    const [direction, setDirection] = useState('left');
    const [animation, setAnimation] = useState('push');
    const VerticalSidebar = () => (
        <Sidebar
          as={Menu}
          //animation={animation}
          //direction={direction}
          icon='labeled'
          inverted
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>
      )
      
      
      
  return (
    <div style={{ height: "100vh" }}>

    </div>
  );
};

export default Profile;