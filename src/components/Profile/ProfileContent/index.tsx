import React from "react";
import {
  Grid,
  Segment,
  Header,
  Divider,
  Container,
  List,
  Message,
  Label,
} from "semantic-ui-react";

const ProfileContent: React.FunctionComponent = () => {
  return (
    <div>
      <Container>
        <Grid stackable columns={2} centered>
          <Grid.Column>
            <Container textAlign="center">
              <Segment raised>
                <Label color="red" floating>
                  22
                </Label>
                <Header as="h2">Mon Journal</Header>
                <Divider />
                <div>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon
                        name="pencil"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">Ecrir dans</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="eye"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">Lire</List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="search"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">Chercher</List.Header>
                      </List.Content>
                    </List.Item>
                  </List>
                </div>
              </Segment>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign="center">
              <Segment>
              <Label color="blue" floating>
                  3
                </Label>
                <Header as="h2">Mes Commentaire</Header>
                <Divider />
                <div>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon
                        name="eye"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">Lire</List.Header>
                      </List.Content>
                    </List.Item>
                  </List>
                </div>
              </Segment>
            </Container>
          </Grid.Column>
        </Grid>
      </Container>
      <div className="msg-container">
        <Message
          header="Welcome back!"
          content="This is a special notification which you can dismiss."
        />
        <Message
          header="Welcome back!"
          content="This is a special notification which you can dismiss."
        />
        <Message
          header="Welcome back!"
          content="This is a special notification which you can dismiss."
        />
      </div>
    </div>
  );
};

export default ProfileContent;
