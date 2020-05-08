import React from "react";
import { Card, Form, Button, Message, Checkbox } from "semantic-ui-react";
import { Formik, Field, ErrorMessage } from "formik";
import { registrationSchema } from "../../../utilities/validationSchema";
import { Link } from "react-router-dom";


const RegisterForm: React.SFC = () => {
  const Submit = (
    values: { email: string; password: string; username: string, terms: boolean },
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    console.log(values);
    //console.log()
    //this.props.login(values.email, values.password);
    setSubmitting(false);
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", username: "" , terms: false }}
        validationSchema={registrationSchema}
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
              <Card.Content style={{ margin: 30 }}>
                <Card.Header style={{ fontSize: 22, padding: 30 }}>
                  Rejoindre VaTo
                </Card.Header>
                {/* <Card.Meta>Joined in 2016</Card.Meta> */}
                <Card.Description>
                  {/* <Error touched={touched.email} message={errors.email} /> */}
                  <div className="msg-error"> <ErrorMessage name="email" /></div>
                  <Form.Field style={{ padding: 5 }}>
                    <Field type="email" name="email" placeholder="E-mail"/>
                   
                  </Form.Field>
                  <div className="msg-error"> <ErrorMessage name="password"/></div>
                  <Form.Field style={{ padding: 5 }}>
                  <Field type="password" name="password" placeholder="Mot de passe"/>
                  </Form.Field>
                  <div className="msg-error"> <ErrorMessage name="username"/></div>

                  <Form.Field style={{ padding: 5 }}>
                  <Field type="text" name="username" placeholder="Nom d'utilisateur"/>
                  </Form.Field>
                </Card.Description>
              </Card.Content>
              <Card.Content extra style={{ paddingLeft: 40, paddingRight: 40 }}>
              <div className="msg-error"> <ErrorMessage name="terms"/></div>
                <Form.Field>
                   <Checkbox label="J'ai lu et j'accepte les conditions générales d'utilisation." nChange={handleChange}
                      onBlur={handleBlur}
                      name="terms"
                      checked={values.terms}
                      /> 
           
          
                </Form.Field>
                <Button color="teal" fluid size="large">
                  Rejoindre
                </Button>
              </Card.Content>
            </Card>
          </Form>
        )}
      </Formik>
      <Message>
        Déjà membre de VaTo ? <Link to="/login">Se connecter</Link>
        <br />
        <Link to="/">Mot de passe oublié ?</Link>
      </Message>
    </div>
  );
};

export default RegisterForm;
