import React, { useContext } from "react";
import { Header, Icon, Image, Button, Divider } from "semantic-ui-react";
import img from "../../images/centered-paragraph.png";
import { history } from "../../utilities/history";
import { Context, saveState } from "../../utilities/useAuth";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
const Profile = () => {
  const { contextState, setContext } = useContext(Context);
  //if(contextState.isLogged === false) history.push("/login");
  // <Button
  //   onClick={
  //       () => {
  //         const v = {
  //           contextState:{
  //             isLogged: false,
  //             user:{
  //               id: '',
  //               role: ''
  //             }
  //           },
  //           setContext
  //         };
  //       setContext(v);
  //       saveState(v);
  //         history.push("/login")
  //       }
  //   }
  //     type="submit"
  //     color="teal"
  //     fluid
  //     size="large"
  //   >
  //     Logout
  //   </Button>
  return (
    <div style={{ height: "100vh" }}>
      <ProfileHeader />
      <Divider  />
      <ProfileContent />
    </div>
  );
};

export default Profile;
