import React, { useReducer } from "react";
import {
  Card,
  Form,
  Button,
  Message,
  Checkbox,
  Grid,
  GridRow,
  GridColumn,
  Label,
} from "semantic-ui-react";
import { Formik, Field, ErrorMessage } from "formik";
import { registrationSchema } from "../../../utilities/validationSchema";
import { Link } from "react-router-dom";
import { userService } from "../../../services/users.service";
import { reducer } from "../../../utilities/reducers";
import { formValues } from "../../../utilities/types";

const RegisterForm: React.FunctionComponent = () => {
  const [{ success, message, error }, dispatch] = useReducer(reducer, {
    success: false,
    error: "",
    message: "",
  });

  const Submit = async (
    values: formValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    dispatch({ type: "request" });
    try {
      const input = {
        email: values.email,
        password: values.password,
        username: values.username || "",
      };
      const result = await userService.signUp(input);
      const data = { ...result.data };
      if (data.success) {
        dispatch({ type: "success", message: data.message });
      } else {
        dispatch({ type: "failure", error: data.error });
      }
    } catch (err) {
      dispatch({ type: "failure", error: "Something went wrong" });
    }
    setSubmitting(false);
    resetForm();
  };
  const initValues = {
    email: "",
    password: "",
    username: "",
    terms: false,
    birthday: "",
    genre: true,
  };
  return (
    <Formik
      initialValues={initValues}
      validationSchema={registrationSchema}
      onSubmit={Submit}
    >
      {({
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit}>
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

          <div style={{ padding: "10px" }}>
            <Form.Field width="12">
              {errors.username && touched.username ? (
                <div className="msg-error">
                  <ErrorMessage name="username" />
                </div>
              ) : (
                <label>Nom d'utilisateur</label>
              )}
              <Field
                type="text"
                name="username"
                placeholder="Nom d'utilisateur"
              />
            </Form.Field>
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
            <Form.Field width="12">
              {errors.password && touched.password ? (
                <div className="msg-error">
                  <ErrorMessage name="password" />
                </div>
              ) : (
                <label>Mot de passe</label>
              )}

              <Field
                type="password"
                name="password"
                placeholder="Mot de passe"
              />
            </Form.Field>
            <Form.Field width="12">
              {errors.birthday && touched.birthday ? (
                <div className="msg-error">
                  <ErrorMessage name="birthday" />
                </div>
              ) : (
                <label>Date de naissance</label>
              )}

              <Field
                type="date"
                name="birthday"
                placeholder="Date de naissance"
              />
            </Form.Field>
            <Form.Field width="12">
              {errors.birthday && touched.birthday ? (
                <div className="msg-error">
                  <ErrorMessage name="birthday" />
                </div>
              ) : (
                <label>Genre</label>
              )}
              <Grid columns="equal">
                <GridRow>
                  <GridColumn>
                    <Checkbox
                      radio
                      label="Homme"
                      name="gender"
                      checked={values.genre}
                      onClick={() => setFieldValue("genre", true)}
                    />
                  </GridColumn>
                  {console.log(values)}
                  <GridColumn>
                    <Checkbox
                      radio
                      label="Femme"
                      name="gender"
                      checked={!values.genre}
                      onClick={() => setFieldValue("genre", false)}
                    />
                  </GridColumn>
                </GridRow>
              </Grid>
            </Form.Field>
            <Form.Field width="12">
              {errors.terms && touched.terms && (
                <div className="msg-error">
                  <ErrorMessage name="terms" />
                </div>
              )}
              <Checkbox
                type="checkbox"
                label="J'ai lu et j'accepte les conditions générales d'utilisation."
                name="terms"
                checked={values.terms}
                onClick={() => setFieldValue("terms", !values.terms)}
              />
            </Form.Field>
            <br/>
            <br/>
            <Form.Field>
              <Grid centered>
                <Button
                  fluid
                  type="submit"
                  color="black"
                  {...(isSubmitting ? { loading: true } : {})}
                >
                  S'inscrire
                </Button>
              </Grid>
            </Form.Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
