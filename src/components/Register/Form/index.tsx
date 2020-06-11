import React, { useReducer } from "react";
import { Card, Form, Button, Message, Checkbox } from "semantic-ui-react";
import { Formik, Field, ErrorMessage } from "formik";
import { registrationSchema } from "../../../utilities/validationSchema";
import { Link } from "react-router-dom";
import { userService } from "../../../services/users.service";
import { reducer } from '../../../utilities/reducers'
import { formValues } from "../../../utilities/types";

const RegisterForm: React.SFC = () => {
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
      const input = { email: values.email, password: values.password, username: values.username || "" };
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
  const initValues = { email: "", password: "", username: "", terms: false };
  return (
    <div>
      <Formik
        initialValues={initValues}
        validationSchema={registrationSchema}
        onSubmit={Submit}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Card centered style={{ width: 450 }}>
              <Card.Content style={{ margin: 30 }}>
                <Card.Header style={{ fontSize: 22, padding: 30 }}>
                  Rejoindre Weigu
                </Card.Header>
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
                <Card.Description>
                  <div className="msg-error">
                    {" "}
                    <ErrorMessage name="email" />
                  </div>
                  <Form.Field style={{ padding: 5 }}>
                    <Field type="email" name="email" placeholder="E-mail" />
                  </Form.Field>
                  <div className="msg-error">
                    <ErrorMessage name="password" />
                  </div>
                  <Form.Field style={{ padding: 5 }}>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                    />
                  </Form.Field>
                  <div className="msg-error">
                    {" "}
                    <ErrorMessage name="username" />
                  </div>

                  <Form.Field style={{ padding: 5 }}>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Nom d'utilisateur"
                    />
                  </Form.Field>
                </Card.Description>
              </Card.Content>
              <Card.Content extra style={{ paddingLeft: 40, paddingRight: 40 }}>
                <div className="msg-error">
                  {" "}
                  <ErrorMessage name="terms" />
                </div>
                <Form.Field>
                  <Checkbox
                    label="J'ai lu et j'accepte les conditions générales d'utilisation."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="terms"
                    checked={values.terms}
                  />
                </Form.Field>
                <Button
                  type="submit"
                  color="teal"
                  fluid
                  size="large"
                  {...(isSubmitting ? { loading: true } : {})}
                >
                  Rejoindre
                </Button>
              </Card.Content>
            </Card>
          </Form>
        )}
      </Formik>
      <Message>
        Déjà membre de Weigu ? <Link to="/login">Se connecter</Link>
        <br />
        <Link to="/">Mot de passe oublié ?</Link>
      </Message>
    </div>
  );
};

export default RegisterForm;
