import React, { useEffect, useContext } from "react";
import { Card, Loader } from "semantic-ui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { userService } from "../../../services/users.service";
import { history } from "../../../utilities/history";
import { Context, saveState } from "../../../utilities/useAuth";

// Connexion avec mot de passe

const LinkVerify: React.FunctionComponent<RouteComponentProps> = (props) => {
  const {contextState, setContext} = useContext(Context);
  if(contextState.isLogged) history.push("/profile");
  const param: any = { ...props.match.params };
  // send request to api to verify token
  useEffect(() => {
    userService
      .magicLinkVerifiy(param.token)
      .then((res) => {
        console.log("datalink");
        console.log(res);
        if (res.data.success) {
          //Redirect to
          const v = {
            contextState: {
              isLogged: res.data.success,
              user: {
                id: res.data.payload,
                role: "admin",
              },
            },
               setContext
          };
           setContext(v);
           saveState(v);
          history.push("/profile");
        }
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  }, [contextState]);
  return (
    <div><Loader active  content="Verifiying link" style={{top: -20}}/>
      <Card centered style={{ width: 450}}>
        <Card.Content style={{ margin: 20 }}>
          <Card.Header style={{ fontSize: 22 , padding: 40 }}>
            Connexion à Weigu
          </Card.Header>
          {/* <Card.Meta>Joined in 2016</Card.Meta> */}
          <Card.Description style={{ textAlign: "center" }}>
            <p>Veuilliez patientez nous verifions votre lien magic</p>
          </Card.Description>
        </Card.Content>
      </Card>
      
    </div>
  );
};

export default withRouter(LinkVerify);
