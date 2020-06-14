import React, { useContext, useState, useEffect } from "react";
import { Header, Icon, Image, Button, Divider } from "semantic-ui-react";
import img from "../../images/centered-paragraph.png";
import { history } from "../../utilities/history";
import { Context, saveState } from "../../utilities/useAuth";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { userService } from "../../services/users.service";
interface userState {
  ProfileImage: string;
  address: string;
  bio: string;
  coverImage: string;
  email: string;
  profileImage: string;
  username: string;
  _id: string;
}
const Profile: React.FunctionComponent = () => {
  const initalState = {
    ProfileImage: "",
    address: "",
    bio: "",
    coverImage: "",
    email: "",
    profileImage: "",
    username: "",
    _id: "",
  };
  const [authUser, setAuthUser] = useState<userState>(initalState);
  const { contextState, setContext } = useContext(Context);

  const Disconnect = () => {
    {
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
    }
  };
  if (!contextState.isLogged) history.push("/login");
  useEffect(() => {
    userService
      .profile(contextState.user.id)
      .then((res) => {
        if (res.data.success) setAuthUser(res.data.data);
        //handle errors
      })
      .catch((err) => err.response.data.statusCode === 401 && Disconnect());
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <ProfileHeader data={authUser} />
      <Divider />
      <ProfileContent />
    </div>
  );
};

export default Profile;
