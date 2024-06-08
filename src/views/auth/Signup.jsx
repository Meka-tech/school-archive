import InputField from "components/fields/InputField";

import Checkbox from "components/checkbox";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { SignUpValidation } from "utils/authValidationSchema";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();
  const BaseUrl = process.env.REACT_APP_BASE_URL;

  const ErrorMessage = (message) => {
    if (message) {
      return <p className="-mt-2 text-sm text-red-500">*{message}</p>;
    }
  };
  return (
    <div className="mb-16 ml-auto mr-auto mt-16 flex h-full w-full items-center justify-center lg:mb-10  ">
      {/* Sign in section */}
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpValidation}
        onSubmit={async (values) => {
          const data = { ...values };
          delete data.confirmPassword;
          try {
            await axios.post(`${BaseUrl}/auth/signup`, data);
            navigate("/auth/sign-in");
          } catch (e) {
            toast.error(e.response.data.message);
            console.log(e);
          } finally {
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <div className="mt-[5vh] w-full max-w-full flex-col items-center   md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                Sign Up
              </h4>
              <p className="mb-4 ml-1 text-base text-gray-600">
                Create an account
              </p>

              <InputField
                variant="auth"
                extra="mb-3"
                label="username*"
                placeholder="admin"
                id="username"
                type="text"
                onChange={handleChange}
                name="username"
                value={values.username}
                state={errors.username ? "error" : ""}
              />
              {ErrorMessage(errors.username)}

              <InputField
                variant="auth"
                extra="mb-3"
                label="email*"
                placeholder="admin@gmail.com"
                id="email"
                type="text"
                onChange={handleChange}
                name="email"
                value={values.email}
                state={errors.email ? "error" : ""}
              />
              {ErrorMessage(errors.email)}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Password*"
                placeholder="Min. 4 characters"
                id="password"
                type="password"
                onChange={handleChange}
                name="password"
                value={values.password}
                state={errors.password ? "error" : ""}
              />
              {ErrorMessage(errors.password)}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Confirm password*"
                placeholder="***********"
                id="password"
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={values.confirmPassword}
                state={errors.confirmPassword ? "error" : ""}
              />
              {ErrorMessage(errors.confirmPassword)}
              {/* Checkbox */}
              <div className="mt-2 mb-4 flex items-center justify-between px-2">
                <div className="flex items-center">
                  <Checkbox />
                  <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                    Keep me logged In
                  </p>
                </div>
                <a
                  className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                  href=" "
                >
                  Forgot Password?
                </a>
              </div>
              <button
                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                onClick={handleSubmit}
                disabled={
                  Object.keys(errors).length !== 0 &&
                  Object.keys(touched).length === Object.keys(values).length
                }
              >
                Sign In
                {isSubmitting && (
                  <Spinner
                    aria-label="Spinner button example"
                    size="sm"
                    className="ml-2"
                  />
                )}
              </button>
              <div className="mt-4">
                <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                  have an account?
                </span>
                <a
                  href="/auth/sign-in"
                  className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                >
                  login
                </a>
              </div>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
