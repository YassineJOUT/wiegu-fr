import * as Yup from "yup";

const validEmail = Yup.string()
  .email("Must be a valid email address")
  .max(255, "Too long for an email")
  .required("Email is required");

const validPassword = Yup.string()
  .min(8, "Password must have at least 8 caracters")
  .max(255, "Too long password")
  .required("Password is required");

const validConfirmationCode = Yup.number()
  .test(
    "len",
    "Confirmation code must be a 4 digits number",
    (t) => t && t.toString().length === 4
  )
  .positive("Confirmation code must be positive")
  .required("Confirmation code is required");

const validUsername = Yup.string()
  .min(3, "Username must have more than 3 caracters")
  .max(50, "Username must have less than 50 caracters")
  .required("Username is required");

// const validTerms = Yup.boolean().oneOf([true], 'Must Accept Terms of Service');

export const loginValidationSchema = Yup.object().shape({
  email: validEmail,
  password: validPassword,
});

export const EmailValidationSchema = Yup.object().shape({
  email: validEmail,
});

export const confirmationCodeFormSchema = Yup.object().shape({
  confirmationCode: validConfirmationCode,
});
export const resetPasswordSchema = Yup.object().shape({
  password1: validPassword,
  password: Yup.string().oneOf(
    [Yup.ref("password1"), null],
    "Passwords must match"
  ),
});

export const registrationSchema = Yup.object().shape({
  //t//erms: validTerms,
  username: validUsername,
  email: validEmail,
  password: validPassword,
});
