import React, { useContext } from "react";
import { Header, Icon, Image, Button } from "semantic-ui-react";
import img from "../../images/centered-paragraph.png";
import { history } from '../../utilities/history';
import { Context, saveState } from "../../utilities/useAuth";
const Profile = () => {
  const {contextState, setContext} = useContext(Context);
  //if(contextState.isLogged === false) history.push("/login");
  return (
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="users" circular />
      <Header.Content>Friends</Header.Content>
    </Header>
    <Image centered size="large" src={img} />
    <Button
    onClick={
        () => {
          const v = {
            contextState:{
              isLogged: false,
              user:{
                id: '',
                role: ''
              }
            },
            setContext
          };
        setContext(v);
        saveState(v);
          history.push("/login")
        }
    }
      type="submit"
      color="teal"
      fluid
      size="large"
    >
      Logout
    </Button>
  </div>
)};

export default Profile;
