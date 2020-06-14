import React from "react";
import { Container, Image, Grid, Icon, Modal } from "semantic-ui-react";
import ProfileEditForm from "../ProfileEdit/Form";
const ProfileHeader: React.FunctionComponent = () => {
  const userHandlre = "@yassine";
  const userBio = "Bio : A little something about me";
  const userAddress = "Paris";
  return (
    <div>
      <div className="profile-header-container">
        <div
          className="profile-header-cover"
          style={{
            backgroundImage: `url('./images/cover.png')`,
          }}
        >
          <Grid columns={3} stackable>
            <Grid.Column></Grid.Column>

            <Grid.Column>
              <Image
                className="profile-photo"
                src="./images/square-image.png"
                size="small"
                circular
                centered
              />
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
