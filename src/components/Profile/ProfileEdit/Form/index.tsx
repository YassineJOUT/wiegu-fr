import React, { useContext, useReducer } from "react";
import { Card, Form, Button, Message, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Context } from "../../../../utilities/useAuth";
import { history } from "../../../../utilities/history";
import { reducer } from "../../../../utilities/reducers";
import { userService } from "../../../../services/users.service";
import { Formik, ErrorMessage, Field } from "formik";

// Connexion avec mot de passe

const ProfileEditForm: React.FunctionComponent = () => {
  const { contextState, setContext } = useContext(Context);
  if (!contextState.isLogged) history.push("/login");
  const [{ success, error, message }, dispatch] = useReducer(reducer, {
    success: false,
    error: "",
    message: "",
  });

  const Submit = async (
    values: { email: string },
    {
      setSubmitting,
      resetForm,
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
          history.push("/login-link-text");
        } else {
          dispatch({ type: "failure", error: data.error });
        }
      })
      .catch((err) => {
        dispatch({ type: "failure", error: "Something went wrong" });
      });

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      // validationSchema={EmailValidationSchema}
      onSubmit={Submit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className="edit-profile-form">
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
          <Divider horizontal>Informations Personnelles</Divider>
          <Form.Field style={{ padding: 5 }}>
            <div className="msg-error">
              <ErrorMessage name="address" />
            </div>
            <Field type="text" placeholder="Adresse" name="address" />
          </Form.Field>
          <Form.Field style={{ padding: 5 }}>
            <div className="msg-error">
              <ErrorMessage name="bio" />
            </div>
            <Field
              type="text"
              placeholder="Bio"
              name="bio"
            />
          </Form.Field>
          <Divider horizontal>Changer le mot de passe</Divider>
          <Form.Field style={{ padding: 5 }}>
            <div className="msg-error">
              <ErrorMessage name="password" />
            </div>
            <Field type="text" placeholder="Mot de passe" name="password" />
          </Form.Field>
          <Form.Field style={{ padding: 5 }}>
            <div className="msg-error">
              <ErrorMessage name="confirmPassword" />
            </div>
            <Field
              type="text"
              placeholder="Confirmer le mot de passe"
              name="confirmPassword"
            />
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
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
