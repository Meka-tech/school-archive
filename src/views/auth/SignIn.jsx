import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Formik } from "formik";
import { SignInValidation } from "utils/authValidationSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";

export default function SignIn() {
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
          password: "",
        }}
        validationSchema={SignInValidation}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(`${BaseUrl}/auth/login`, values);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.user);
            navigate("/admin/home");
          } catch (e) {
            toast.error(e.response.data.message);
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
            <div className="mt-[10vh] w-full max-w-full flex-col items-center   md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                Sign In
              </h4>
              <p className="mb-9 ml-1 text-base text-gray-600">
                Enter your username and password to sign in!
              </p>
              {/* Email */}
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
              {/* Password */}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Password*"
                placeholder="Min. 8 characters"
                id="password"
                type="password"
                onChange={handleChange}
                name="password"
                value={values.password}
                state={errors.password ? "error" : ""}
              />
              {ErrorMessage(errors.password)}
              {/* Checkbox */}
              <div className=" mt-2 mb-4 flex items-center justify-between px-2">
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
                  Not registered yet?
                </span>
                <a
                  href="/auth/sign-up"
                  className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                >
                  Create an account
                </a>
              </div>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
