import React, { useReducer } from "react";
import { Card, Form, Button, Message } from "semantic-ui-react";
import { Formik, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../../utilities/validationSchema";
import { Link } from "react-router-dom";
import { reducer } from "../../../utilities/reducers";
import { userService } from "../../../services/users";
import { history } from "../../../utilities/history";

const LoginForm: React.SFC = () => {
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
    try {
      const result = await userService.signIn(values);
      const data = { ...result.data };
      console.log(result);
      if (data.success) {
        //history push to profile
        history.push("/profile");
        dispatch({ type: "success", message: data.message });
      } else {
        dispatch({ type: "failure", error: data.message });
      }
    } catch (err) {
      dispatch({ type: "failure", error: err.toString() });
    }

    setSubmitting(false);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={Submit}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Card centered style={{ width: 450 }}>
              <Card.Content style={{ margin: 20 }}>
                <Card.Header style={{ fontSize: 22, padding: 30 }}>
                  Connexion à VaTo
                </Card.Header>
                {!success && error && (
                  <Message negative>
                    <Message.Header>{error}</Message.Header>
                  </Message>
                )}
                <Card.Description>
                  <div className="msg-error">
                    {" "}
                    <ErrorMessage name="email" />
                  </div>
                  <Form.Field style={{ padding: 5 }}>
                    <input
                      type="email"
                      placeholder="E-mail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      value={values.email}
                    />
                  </Form.Field>
                  <div className="msg-error">
                    {" "}
                    <ErrorMessage name="password" />
                  </div>
                  <Form.Field style={{ padding: 5 }}>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      value={values.password}
                    />
                  </Form.Field>
                </Card.Description>
              </Card.Content>
              <Card.Content extra style={{ paddingLeft: 40, paddingRight: 40 }}>
                <Button
                  type="submit"
                  color="teal"
                  fluid
                  size="large"
                  {...(isSubmitting && { loading: true })}
                >
                  Connexion
                </Button>
              </Card.Content>
            </Card>
          </Form>
        )}
      </Formik>
      <Message>
        Pas de compte ? <Link to="/register">Rejoindre VaTo</Link>
        <br />
        <Link to="/">Mot de passe oublié ?</Link>
      </Message>
    </div>
  );
};

export default LoginForm;
