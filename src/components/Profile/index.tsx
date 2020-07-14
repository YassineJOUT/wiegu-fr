import React from "react";
import {  Divider } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";

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
