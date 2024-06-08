import * as Yup from "yup";

export const SignInValidation = Yup.object({
  username: Yup.string().required("username is required"),
  password: Yup.string().required("No password provided."),
  // .min(8, "Password is too short - should be 8 chars minimum.")
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
  // .matches(
  //   /^(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
  //   "Password must contain at least 1 number and 1 special character"
  // )
});

export const SignUpValidation = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("No password provided.")
    .min(4, "Password is too short - should be 4 chars minimum."),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
  // .matches(
  //   /^(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
  //   "Password must contain at least 1 number and 1 special character"
  // )
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
});
