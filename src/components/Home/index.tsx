import React from "react";
import { Grid, Button } from 'semantic-ui-react'
import HomeCard from "./HomeCard";
import SliderComponent from "./Slider";
import ModalAll from "./modalAll";
import ModalInscription from "./ModalInscription";


const Profile: React.FunctionComponent = () => {
  return (
    <div  className ="containerback" >
      <div className ="contenu"></div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
            <SliderComponent/>
            <div className = "buttons">
            <ModalInscription trigger={<Button size='small' color="red" className="signup" >Commencer</Button>} />
            <ModalAll trigger={<Button size='small' color="grey" className="signin" >Se connecter</Button>}/>
            
            </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <HomeCard />
            </Grid.Column>

          </Grid.Row>
        </Grid>
    </div>
  );
};

export default Profile;
