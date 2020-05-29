import React from "react";
import { Card, Form, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { EmailValidationSchema } from "../../../utilities/validationSchema";

// Connexion avec mot de passe

const LoginEmailForm: React.SFC = () => {
  const Submit = (
    values: { email: string; password: string },
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
        validationSchema={EmailValidationSchema}
        onSubmit={Submit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Card centered style={{ width: 450 }}>
              <Card.Content style={{ margin: 20 }}>
                <Card.Header style={{ fontSize: 22, padding: 30 }}>
                  Connexion à Weigu
                </Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                <Card.Description style={{ textAlign: "left" }}>
                  <Form.Field style={{ padding: 5 }}>
                    <div className="msg-error">
                      {" "}
                      <ErrorMessage name="email" />
                    </div>
                    <Field type="text" placeholder="Email" name="email" />
                  </Form.Field>
                  <Link to="login-link-text">
                    <Button
                      type="submit"
                      color="teal"
                      fluid
                      size="large"
                      style={{ marginTop: 30 }}
                    >
                      Suivant
                    </Button>
                  </Link>
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
