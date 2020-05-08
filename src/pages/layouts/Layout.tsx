import React, { ReactNode } from "react";
import { Grid, Header } from "semantic-ui-react";

type Props = {
  children: ReactNode;
};

const Layout: React.SFC<Props> = ({ children }) => (
  <div>
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          {/* <Image src='/logo.png' /> Log-in to your account */}
        </Header>
        {children}
      </Grid.Column>
    </Grid>
  </div>
);

export default Layout;
