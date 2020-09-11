import React, { useState } from "react";
import { Grid, Button, Message } from "semantic-ui-react";
import HomeCard from "../Shared/HomeCard";
import ModalAll from "./modalAll";
import SliderComponentX from "./Slider/Slider";

const Home: React.FunctionComponent = () => {
  const [page, setPage] = useState("");
  return (
    <div className="containerback">
      <Grid stackable columns="equal">
        <Grid.Row centered>
          <Grid.Column width={5}>
          <SliderComponentX slideCount={4}/>
            <br></br>
            <div className="buttons" style={{ marginBottom: "60px" }}>
              <ModalAll
                page={page}
                setPage={setPage}
                trigger={
                  <Button size="large" color="red" className="signup" onClick={()=> setPage('allRegister') }>
                    Commencer
                  </Button>
                }
              />
              <ModalAll
                page={page}
                setPage={setPage}
                trigger={
                  <Button

                    size="large"
                    style={{ backgroundColor: "white", color: "black" }}
                    className="signin"
                    onClick={()=> setPage('allLogin') }
                  >
                    Se connecter
                  </Button>
                }
              />
            </div>
          </Grid.Column>
          <Grid.Column width={10} style={{ marginRight: "10px" }}>
            <Grid stackable columns={2}>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <HomeCard />
              </Grid.Column>
              <Grid.Column>
                <a onClick={() => console.log("CLICKED")}>
                  <Message style={{ textAlign: "center", cursor: "pointer" }}>
                    Voir toutes les publications...
                  </Message>
                </a>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
