import React, { useContext, useState, useEffect } from "react";
import { Header, Icon, Image, Button, Divider, Loader } from "semantic-ui-react";
import img from "../../images/centered-paragraph.png";
import { Context, saveState } from "../../utilities/useAuth";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { userService } from "../../services/users.service";

const Profile: React.FunctionComponent = () => {

  return (
    <div style={{ height: "100vh" }}>
      <ProfileHeader />
      <Divider />
      <ProfileContent />
    </div>
  );
};

export default Profile;
