import React, { useReducer, useContext } from "react";
import { Card, Form, Button, Message } from "semantic-ui-react";
import { Formik, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../../utilities/validationSchema";
import { Link } from "react-router-dom";
import { reducer } from "../../../utilities/reducers";
import { userService } from "../../../services/users.service";
import { history } from "../../../utilities/history";
import { Context, saveState } from "../../../utilities/useAuth";

const LoginForm: React.SFC = () => {
  const {contextState, setContext} = useContext(Context);
  if(contextState.isLogged) history.push("profile");
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
        userService.login(values).then(dataa => {
        const data = { ...dataa.data };
        if (data.success) {
          //history push to profile
          const { user } = data.data;
          const v = {
            contextState:{
              isLogged: data.success,
              user:{
                id: user._id,
                role: 'admin'
              }
            },
            setContext
          };
        setContext(v);
        saveState(v);
          dispatch({ type: "success", message: "Login success" });
          history.push("/profile");
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
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={Submit}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Card centered style={{ width: 450 }}>
              <Card.Content style={{ margin: 20 }}>
                <Card.Header style={{ fontSize: 22, padding: 30 }}>
                  Connexion à Weigu
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
        Pas de compte ? <Link to="/register">Rejoindre Weigu</Link>
        <br />
        <Link to="/">Mot de passe oublié ?</Link>
      </Message>
    </div>
  );
};

export default LoginForm;
