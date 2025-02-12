import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Image,
  Grid,
  Icon,
  Modal,
  Label,
  Loader,
} from "semantic-ui-react";
import ProfileEditForm from "../ProfileEdit/Form";
import { API_URL } from "../../../utilities/config";
import ImageInput from "../../Shared/ImageInput";
import CoverImageInput from "../../Shared/CoverImageInput";
import { Context } from "../../../utilities/useAuth";
import { history } from "../../../utilities/history";
import { userService } from "../../../services/users.service";

export interface userState {
  ProfileImage: string;
  address: string;
  bio: string;
  coverImage: string;
  email: string;
  profileImage: string;
  username: string;
  _id: string;
}
const ProfileHeader: React.FunctionComponent = () => {
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
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const [uploadedProfile, setUploadedProfile] = useState<string | null>(null);
  const { contextState, setContext } = useContext(Context);

  const Disconnect = () => {
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
    useState(v);
    history.push("/");
  };
  if (!contextState.isLogged) history.push("/");
  useEffect(() => {
    setLoading(true);
    userService
      .profile(contextState.user.id)
      .then((res) => {
        if (res.data.success) setAuthUser(res.data.data);
        setLoading(false);
        //handle errors
      })
      .catch((err) => {
        err.response.data.statusCode === 401 && Disconnect();
        setLoading(false);
      });
  }, []);

  // const userHandlre = "@" + data.username;
  // const userBio = "Bio : " + data.bio;
  // const userAddress = data.address;
  // const cover = data.coverImage
  //   ? API_URL + "users/" + data.coverImage
  //   : "./images/cover.png";
  return (
    <div className="profile-header-container">
      {loading ? (
        <Loader inverted />
      ) : (
        <div
          className="profile-header-cover"
          style={{
            backgroundImage: `url('${
              uploaded
                ? API_URL + "users/" + uploaded
                : authUser.coverImage
                ? API_URL + "users/" + authUser.coverImage
                : "http://localhost:3010/users/default-cover.png"
            }')`,
          }}
        >
          <Grid columns={3} stackable>
            <Grid.Column>
              <Modal
                closeIcon
                size={"fullscreen"}
                trigger={
                  <Label as="a">
                    <Icon name="photo" />
                  </Label>
                }
              >
                <Modal.Header>Selectioner une photo de couverture</Modal.Header>

                <CoverImageInput
                  handleUpload={(t: string) => setUploaded(t)}
                  coverImage={
                    uploaded
                      ? API_URL + "users/" + uploaded
                      : authUser.coverImage
                      ? API_URL + "users/" + authUser.coverImage
                      : "http://localhost:3010/users/default-cover.png"
                  }
                />
              </Modal>
            </Grid.Column>

            <Grid.Column>
              <Modal
                size={"tiny"}
                trigger={
                  <Image
                    className="profile-photo"
                    src={
                      uploadedProfile
                        ? API_URL + "users/" + uploadedProfile
                        : authUser.profileImage
                        ? API_URL + "users/" + authUser.profileImage
                        : "http://localhost:3010/users/default-profile.png"
                    }
                    size="small"
                    circular
                    centered
                  />
                }
              >
                <Modal.Header>Selectioner une photo de profil</Modal.Header>

                <ImageInput
                  handleUpload={(r: string) => setUploadedProfile(r)}
                  profileImage={
                    authUser.profileImage
                      ? API_URL + "users/" + authUser.profileImage
                      : "http://localhost:3010/users/default-profile.png"
                  }
                />
              </Modal>
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <div className="profile-btn-controls">
                      <span className="profile-btn-controls-items">
                        {"@" + authUser.username}
                      </span>
                      <br />
                      <br />
                      <span className="profile-btn-controls-items">
                        {authUser.bio
                          ? "Bio : " + authUser.bio
                          : "Votre bio n'est pas encore défini"}
                      </span>
                      <br />
                      <br />
                      <span className="profile-btn-controls-items">
                        <Icon name="map marker alternate" color="grey" />
                        {authUser.address
                          ? authUser.address
                          : "Votre Adresse n'est pas encore défini"}
                      </span>
                    </div>
                  </Grid.Row>
                </Grid>
              </Container>
            </Grid.Column>

            <Grid.Column>
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <div className="profile-btn-controls-btns">
                      <Modal
                        trigger={
                          <span
                            className="profile-btn-controls-items"
                            style={{ cursor: "pointer" }}
                          >
                            Edit Profile
                          </span>
                        }
                      >
                        <Modal.Header>Editer le profil</Modal.Header>
                        <Modal.Content>
                          <Modal.Description>
                            <ProfileEditForm
                              profileState={authUser}
                              handleProfileEdit={(d: userState) =>
                                setAuthUser(d)
                              }
                            />
                          </Modal.Description>
                        </Modal.Content>
                      </Modal>

                      <br />
                      <br />
                      <span
                        className="profile-btn-controls-items"
                        style={{ cursor: "pointer" }}
                      >
                        <Icon name="share" color="grey" />
                        {"share"}
                      </span>
                    </div>
                  </Grid.Row>
                </Grid>
              </Container>
            </Grid.Column>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
