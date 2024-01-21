import * as yup from "yup";

export const loginValidationSchema = yup.object({
  username: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Must have minimum 8 characters")
    .matches(/^(?=.*[a-z])/, "Password must have at least one smallcase letter")
    .matches(/^(?=.*[A-Z])/, "Password must have at least one UPPERCASE letter")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "Password must have at least one special character"
    ),
});
