import React, { useReducer, useContext } from "react";
import { Card, Form, Button, Message, Grid } from "semantic-ui-react";
import { Formik, ErrorMessage, Field } from "formik";
import { loginValidationSchema } from "../../../utilities/validationSchema";
import { Link } from "react-router-dom";
import { reducer } from "../../../utilities/reducers";
import { userService } from "../../../services/users.service";
import { history } from "../../../utilities/history";
import { Context, saveState } from "../../../utilities/useAuth";

const LoginForm: React.SFC = () => {
  const { contextState, setContext } = useContext(Context);
  if (contextState.isLogged) history.push("profile");
  const [{ success, error }, dispatch] = useReducer(reducer, {
    success: false,
    error: "",
    message: "",
  });
  const Submit = async (
    values: { email: string; password: string },
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    dispatch({ type: "request" });
    //try {
    await userService
      .login(values)
      .then((dataa) => {
        const data = { ...dataa.data };
        if (data.success) {
          //history push to profile
          const { user } = data.data;
          const v = {
            contextState: {
              isLogged: data.success,
              user: {
                id: user._id,
                role: "admin",
              },
            },
            setContext,
          };
          setContext(v);
          saveState(v);
          dispatch({ type: "success", message: "Login success" });
          history.push("/profile");
        } else {
          dispatch({ type: "failure", error: data.error });
        }

        resetForm();
      })
      .catch((err) => {
        dispatch({ type: "failure", error: "Something went wrong" });
      });

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
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
      }) => (
        <Form onSubmit={handleSubmit}>
          {!success && error && (
            <Message negative>
              <Message.Header>{error}</Message.Header>
            </Message>
          )}

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

            <Field type="password" name="password" placeholder="Mot de passe" />
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
                  Connexion
                </Button>
              </Grid>
            </Form.Field>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
