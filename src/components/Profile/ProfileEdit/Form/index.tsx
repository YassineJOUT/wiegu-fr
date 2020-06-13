import React, { useContext, useReducer } from "react";
import { Card, Form, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Context } from "../../../../utilities/useAuth";
import { history } from "../../../../utilities/history";
import { reducer } from "../../../../utilities/reducers";
import { userService } from "../../../../services/users.service";
import { Formik, ErrorMessage, Field } from "formik";

// Connexion avec mot de passe

const LoginEmailForm: React.FunctionComponent = () => {
  const {contextState, setContext} = useContext(Context);
  if(!contextState.isLogged) history.push("/login");
  const [{ success, error,message }, dispatch] = useReducer(reducer, {
    success: false,
    error: "",
    message: "",
  });

  const Submit = async (
    values: { email: string},
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    dispatch({ type: "request" });
    await userService.magicLink(values).then(dataa => {
      const data = { ...dataa.data };
      if (data.success) {
        //history push to profile
        dispatch({ type: "success", message: "Email Sent success" });
        history.push("/login-link-text");
      } else {
        dispatch({ type: "failure", error: data.error });
      }
    
    }).catch(err => {
      dispatch({ type: "failure", error: "Something went wrong" });
    });
    
    setSubmitting(false);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        // validationSchema={EmailValidationSchema}
        onSubmit={Submit}
      >
        {({ handleSubmit,isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Card centered style={{ width: 450 }}>
              <Card.Content style={{ margin: 20 }}>
                <Card.Header style={{ fontSize: 22, padding: 30 }}>
                  Connexion à Weigu
                </Card.Header>
                {success && message && (
                  <Message positive>
                    <Message.Header>{message}</Message.Header>
                  </Message>
                )}
                {!success && error && (
                  <Message negative>
                    <Message.Header>{error}</Message.Header>
                  </Message>
                )}
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                <Card.Description style={{ textAlign: "left" }}>
                  <Form.Field style={{ padding: 5 }}>
                    <div className="msg-error">
                      <ErrorMessage name="email" />
                    </div>
                    <Field type="text" placeholder="Email" name="email" />
                  </Form.Field>
                    <Button
                      type="submit"
                      color="teal"
                      fluid
                      size="large"
                      style={{ marginTop: 30 }}
                    >
                      {isSubmitting ? "Loading..." : "Suivant"}
                    </Button>
                </Card.Description>
              </Card.Content>
            </Card>
          </Form>
        )}
      </Formik>
      <Message>
        <Link to="/login">Retour</Link>
      </Message>
    </div>
  );
};

export default LoginEmailForm;
