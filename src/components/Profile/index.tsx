import React from "react";
import { Header, Icon, Image, Button } from "semantic-ui-react";
import img from "../../images/centered-paragraph.png";
import { history } from '../../utilities/history';
const Profile = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="users" circular />
      <Header.Content>Friends</Header.Content>
    </Header>
    <Image centered size="large" src={img} />
    <Button
    onClick={
        () => history.push("/login")
    }
      type="submit"
      color="teal"
      fluid
      size="large"
    >
      Logout
    </Button>
  </div>
);

export default Profile;
