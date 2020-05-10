import React from "react";
import {
  Card,
  Form,
  Button,
  Message,
} from "semantic-ui-react";
import { Formik, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../../utilities/validationSchema";
import { Link } from "react-router-dom";


const LoginForm: React.SFC = () => {
  const Submit = (
    values: { email: string; password: string;},
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    //console.log(values);
    //this.props.login(values.email, values.password);
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
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Card centered style={{ width: 450 }}>
              <Card.Content style={{ margin: 20 }}>
                <Card.Header style={{ fontSize: 22, padding: 30 }}>
                  Connexion à VaTo
                </Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                <Card.Description>
                <div className="msg-error"> <ErrorMessage name="email" /></div>
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
                  <div className="msg-error"> <ErrorMessage name="password" /></div>
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
                <Button type="submit" color="teal" fluid size="large">
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
