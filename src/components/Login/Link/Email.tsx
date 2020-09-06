import React, { useContext, useReducer, useState } from "react";
import { Card, Form, Button, Message, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { EmailValidationSchema } from "../../../utilities/validationSchema";
import { Context } from "../../../utilities/useAuth";
import { history } from "../../../utilities/history";
import { reducer } from "../../../utilities/reducers";
import { userService } from "../../../services/users.service";
import LoginMessage from "./Message";

// Connexion avec mot de passe

const LoginEmailForm: React.FunctionComponent = () => {
  const { contextState } = useContext(Context);
  const [sent, setSent] = useState(false);
  if (contextState.isLogged) history.push("/profile");
  const [{ success, error, message }, dispatch] = useReducer(reducer, {
    success: false,
    error: "",
    message: "",
  });

  const Submit = async (
    values: { email: string },
    {
      setSubmitting,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    dispatch({ type: "request" });
    await userService
      .magicLink(values)
      .then((dataa) => {
        const data = { ...dataa.data };
        if (data.success) {
          //history push to profile
          dispatch({ type: "success", message: "Email Sent success" });
          //history.push("/login-link-text/" + values.email);
          setSent(true);
        } else {
          dispatch({ type: "failure", error: data.error });
        }
      })
      .catch((err) => {
        setSent(false);
        dispatch({ type: "failure", error: "Something went wrong" });
      });

    setSubmitting(false);
    //resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={EmailValidationSchema}
      onSubmit={Submit}
    >
      {({ handleSubmit, isSubmitting, errors, touched, values }) => (
        <Form onSubmit={handleSubmit}>
          {success && message && (
            <Message style={{ textAlign: "center" }} positive>
              <Message.Header>{message}</Message.Header>
            </Message>
          )}
          {!success && error && (
            <Message style={{ textAlign: "center" }} negative>
              <Message.Header>{error}</Message.Header>
            </Message>
          )}
          {/* <Card.Meta>Joined in 2016</Card.Meta> */}

          {!sent ? (
            <>
              <Form.Field width="12">
                {errors.email && touched.email ? (
                  <div className="msg-error">
                    <ErrorMessage name="email" />
                  </div>
                ) : (
                  <label>Email</label>
                )}

                <Field type="email" name="email" placeholder="E-mail" />
              </Form.Field>
              <br />
              <br />
              <Form.Field>
                <Grid centered>
                  <Button
                    fluid
                    type="submit"
                    color="black"
                    {...(isSubmitting ? { loading: true } : {})}
                  >
                    Connexion
                  </Button>
                </Grid>
              </Form.Field>
            </>
          ) : (
            <LoginMessage email={ values.email } />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginEmailForm;
