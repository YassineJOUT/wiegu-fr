import React, { ReactNode, useContext } from "react";
import Topbar from "../../components/Shared/Topbar";
import { Segment, Container, List } from "semantic-ui-react";
import { Context } from "../../utilities/useAuth";

type Props = {
  children: ReactNode;
};

const ContentLayout: React.SFC<Props> = ({ children }) => {
  const { contextState, setContext } = useContext(Context);
  console.log(contextState);
  return (
    <div className="content-page">
      <div className="content">
        <div className="content-fluid">
          {!contextState.isLogged && <div className="contenu"></div>}
          <Topbar />
          <div style={{paddingTop: "80px"}}>{children}</div>
        </div>
        <Segment
          vertical
          style={{
            margin: "1em 0em 0em 0em",
            padding: "1em 0em",
            color: "black",
            backgroundColor: "white",
          }}
        >
          <Container textAlign="center" style={{bottom: 0}}>
            <List horizontal divided link size="small">
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
};

export default ContentLayout;
