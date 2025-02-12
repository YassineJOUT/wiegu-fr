import React from "react";
import { Grid, Button, Container, List } from "semantic-ui-react";
import HomeCard from "../Shared/HomeCard";
import SliderComponent from "./Slider";
import ModalAll from "./modalAll";
import ModalInscription from "./ModalInscription";

const Home: React.FunctionComponent = () => {
  return (
    <div className="containerback">
      <Grid stackable columns='equal'>
        <Grid.Row  centered>
          <Grid.Column width={5} >
            <SliderComponent />
            <div className="buttons">
              <ModalAll
                page="register"
                trigger={
                  <Button size="large" color="red" className="signup">
                    Commencer
                  </Button>
                }
              />
              <ModalAll
                page=""
                trigger={
                  <Button size="large"  style={{backgroundColor: 'white', color: 'black'}} className="signin" >
                    Se connecter
                  </Button>
                }
              />
            </div>
          </Grid.Column>
          <Grid.Column width={10} style={{marginRight: '10px'}}>
            <Grid stackable columns={2}>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
              <Grid.Column><HomeCard /></Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </div>
  );
};

export default Home;
