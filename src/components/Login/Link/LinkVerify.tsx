import React, { useEffect, useContext, useReducer, useState } from "react";
import { Card, Loader, Message } from "semantic-ui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { userService } from "../../../services/users.service";
import { history } from "../../../utilities/history";
import { Context, saveState } from "../../../utilities/useAuth";
import { reducer } from "../../../utilities/reducers";

// Connexion avec mot de passe

const LinkVerify: React.FunctionComponent<RouteComponentProps> = (props) => {
  const { contextState, setContext } = useContext(Context);
  if (contextState.isLogged) history.push("/profile");
  const [loading, setLoading] = useState(false);
  const [{ success, error }, dispatch] = useReducer(reducer, {
    success: false,
    error: "",
    message: "",
  });
  const param: any = { ...props.match.params };
  // send request to api to verify token
  useEffect(() => {
    setLoading(true);
    dispatch({ type: "request" });
    userService
      .magicLinkVerifiy(param.token)
      .then((res) => {
        if (res.data.success) {
          //Redirect to
          dispatch({ type: "success", message: " Vous avez un token valide" });
          console.log("after token verify");
          console.log(res.data);
          const v = {
            contextState: {
              isLogged: res.data.success,
              user: {
                id: res.data.id,
                role: "admin",
              },
            },
            setContext,
          };
          setContext(v);
          saveState(v);
          history.push("/profile");
        } else {
          dispatch({ type: "failure", error: res.data.error });
        }
        setLoading(false);
      })
      .catch((err) => {
        dispatch({ type: "failure", error: "something went wrong" });
        setLoading(false);
      });
  }, [param.token, setContext]);
  return (
    <div>
      {!success && error && (
        <Message style={{textAlign: "center"}} negative>
          <Message.Header>{error}</Message.Header>
        </Message>
      )}
    { loading && <Loader active content="Verifiying link" style={{ top: -20 }} />}
      <Card centered style={{ width: 450 }}>
        <Card.Content style={{ margin: 20 }}>
          <Card.Header style={{ fontSize: 22, padding: 40 }}>
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
