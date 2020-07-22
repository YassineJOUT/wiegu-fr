import React, { useContext, useReducer } from "react";
import {  Form, Button, Message, Divider } from "semantic-ui-react";
import { Context } from "../../../../utilities/useAuth";
import { history } from "../../../../utilities/history";
import { reducer } from "../../../../utilities/reducers";
import { userService } from "../../../../services/users.service";
import { Formik, ErrorMessage, Field } from "formik";
import { userState } from "../../ProfileHeader";

// Connexion avec mot de passe
export type editProfileType = {
  id?: string;
  address: string;
  bio: string;
  password: string;
};

type ProfileEditProps = {
  handleProfileEdit: Function;
  profileState: userState;
};

const ProfileEditForm: React.FunctionComponent<ProfileEditProps> = ({ handleProfileEdit, profileState }) => {
  const { contextState } = useContext(Context);
  if (!contextState.isLogged) history.push("/login");
  const [{ success, error, message }, dispatch] = useReducer(reducer, {
    success: false,
    error: "",
    message: "",
  });

  const Submit = async (
    values: editProfileType,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    dispatch({ type: "request" });
    await userService
      .editProfile({ ...values, id: contextState.user.id })
      .then((dataa) => {
        const data = { ...dataa.data };
        if (data.success) {
          handleProfileEdit({...profileState,...values});
          dispatch({
            type: "success",
            message: "Vos information sont modifier",
          });
          history.push("/profile");
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
      initialValues={{
        address: profileState.address ? profileState.address : "",
        bio: profileState.bio ? profileState.bio : "",
        password: "",
      }}
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
            <Field type="text" placeholder="Bio" name="bio" />
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
            {isSubmitting ? "Loading..." : "Enregistrer"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
