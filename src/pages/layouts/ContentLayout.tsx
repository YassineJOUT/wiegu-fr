import React, { ReactNode } from "react";
import Topbar from "../../components/Shared/Topbar";
import { Segment, Container, List } from "semantic-ui-react";

type Props = {
  children: ReactNode;
};

const ContentLayout: React.SFC<Props> = ({ children }) => (
  <div className="content-page">
    <div className="content">
      <div className="content-fluid">
        <div className="contenu"></div>
        <Topbar />
        <div style={{ marginTop: "10px" }}>{children}</div>
      </div>
      <Segment
        vertical
        style={{ margin: "1em 0em 0em 0em", padding: "1em 0em",color: 'black', backgroundColor: 'white' }}
      >
        <Container textAlign="center">
          <List horizontal  divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  </div>
);

export default ContentLayout;
