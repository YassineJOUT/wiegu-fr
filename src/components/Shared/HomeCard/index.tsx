import React from "react";
import {
  Card, Icon, Image
} from "semantic-ui-react";

const HomeCard: React.FunctionComponent = () => {
  return (
    <div style={{fontSize: '12px'}}>
      <Card fluid >
        <Card.Content>
        <div className="privacy">Public <Icon name='unlock' size='large' /></div>
          
          <Card.Header>
              <Image
              avatar
              size='medium'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            Steve Sanders <Icon name='point' size='small' color="red" className ="redlocation" > paris (79)</Icon>

          </Card.Header>
          <Card.Meta>Extrait du journal. 24 juin 2020</Card.Meta>
          <Card.Description>
          At every tiled on ye defer do. No attention suspected oh difficult. Fond his say old meet cold find come whom. The sir park sake bred. Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or. 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='comment' size='small'> 314</Icon>
          <Icon name='heartbeat' size='small'> Fast</Icon> - <strong className="heart">JUICE WLRD</strong> (+2)
          <Icon name='ellipsis horizontal' size='large' /> 
        </Card.Content>
      </Card>
    </div>
  );
};

export default HomeCard;
