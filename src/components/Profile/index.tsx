import React, { useContext, useState, useEffect } from "react";
import { Header, Icon, Image, Button, Divider } from "semantic-ui-react";
import img from "../../images/centered-paragraph.png";
import { history } from "../../utilities/history";
import { Context, saveState } from "../../utilities/useAuth";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { userService } from "../../services/users.service";
const Profile: React.FunctionComponent = () => {
  const [authUser, setAuthUser] = useState({});
  const { contextState, setContext } = useContext(Context);
  if (!contextState.isLogged) history.push("/login");
  useEffect(() => {
    userService
      .profile(contextState.user.id)
      .then((res) => {
        if (res.data.success) setAuthUser(res.data.data);
        //handle errors 
      })
      .catch((err) => console.error(err));
  }, []);
 
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
      <ProfileHeader data={authUser}/>
      <Divider />
      <ProfileContent />
    </div>
  );
};

export default Profile;
