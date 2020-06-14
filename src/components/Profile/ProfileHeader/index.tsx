import React from "react";
import {
  Container,
  Image,
  Grid,
  Icon,
  Modal,
  Popup,
  Button,
  Header,
  Segment,
  Label,
} from "semantic-ui-react";
import ProfileEditForm from "../ProfileEdit/Form";
import { API_URL } from "../../../utilities/config";
import { InputFile } from "semantic-ui-react-input-file";
import ImageInput from "../../Shared/ImageInput";
import CoverImageInput from "../../Shared/CoverImageInput";
interface Prop {
  data: any;
}
const ProfileHeader: React.FunctionComponent<Prop> = ({ data }) => {
  console.log("data arrived");
  console.log(data);
  const userHandlre = "@" + data.username;
  const userBio = "Bio : " + data.bio;
  const userAddress = data.address;
  const cover = data.coverImage ? API_URL + "users/" + data.coverImage:  "./images/cover.png";
  return (
    <div>
      <div className="profile-header-container">
        <div
          className="profile-header-cover"
          style={{
            backgroundImage: `url('${cover}')`,
          }}
        >
          <Grid columns={3} stackable>
            <Grid.Column>
              <Modal
                size={"fullscreen"}
                trigger={
                  <Label as="a">
                    <Icon name="photo" />
                  </Label>
                }
              >
                <Modal.Header>Selectioner une photo de couverture</Modal.Header>

                <CoverImageInput
                  coverImage={
                    data.coverImage
                      ? cover
                      : null
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
                      data.profileImage
                        ? API_URL + "users/" + data.profileImage
                        : "http://localhost:3010/users/matthew-7e89.png"
                    }
                    size="small"
                    circular
                    centered
                  />
                }
              >
                <Modal.Header>Selectioner une photo de profil</Modal.Header>

                <ImageInput
                  profileImage={
                    data.profileImage
                      ? API_URL + "users/" + data.profileImage
                      : null
                  }
                />
              </Modal>
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <div className="profile-btn-controls">
                      <span className="profile-btn-controls-items">
                        {userHandlre}
                      </span>
                      <br />
                      <br />
                      <span className="profile-btn-controls-items">
                        {userBio}
                      </span>
                      <br />
                      <br />
                      <span className="profile-btn-controls-items">
                        <Icon name="map marker alternate" color="grey" />
                        {userAddress}
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
                            <ProfileEditForm />
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
      </div>
    </div>
  );
};

export default ProfileHeader;
