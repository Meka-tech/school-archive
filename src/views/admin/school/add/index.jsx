import axios from "axios";
import InputField from "components/fields/InputField";
import Switch from "components/switch";
import { Spinner } from "flowbite-react";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const AddSchool = () => {
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [studentBoarding, setStudentBoarding] = useState(false);
  const [securityGuard, setSecurityGuard] = useState(false);
  const navigate = useNavigate();

  const SchoolSchema = Yup.object().shape({
    name: Yup.string().required(),
    location: Yup.string().required(),
    localGovernmentCouncil: Yup.string().required(),
    administratorName: Yup.string().required(),
    telephone: Yup.string().required(),
    email: Yup.string().required(),
    foundingYear: Yup.string().required(),
    educationLevels: Yup.string().required(),
    pta: Yup.string(),
    latestDateOfInspection: Yup.string(),
  });

  return (
    <div className="ml-auto mr-auto mt-5 w-full  rounded-xl bg-white px-3 py-4 xl:w-7/12 xl:px-6">
      <p className="mb-4  text-xl font-semibold text-navy-800 xl:text-2xl ">
        Add School to archives
      </p>
      <Formik
        initialValues={{
          name: "",
          location: "",
          localGovernmentCouncil: "",
          administratorName: "",
          telephone: "",
          email: "",
          foundingYear: "",
          educationLevels: "",
          pta: "",
          latestDateOfInspection: "",
        }}
        validationSchema={SchoolSchema}
        onSubmit={async (values) => {
          setLoading(true);
          const data = {
            ...values,
            latestDateOfInspection: new Date(
              values.latestDateOfInspection
            ).toISOString(),
            studentBoarding,
            securityGuard,
          };

          try {
            const response = await axios.post(`${BaseUrl}/school`, data);

            const school = response.data.data;
            navigate("/admin/school", { state: { id: school._id } });
          } catch (e) {
            console.log(e);
          } finally {
            setLoading(false);
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
            <div className="grid grid-cols-1 items-center justify-center gap-2 xl:grid-cols-2 xl:gap-4">
              <InputField
                label="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                state={errors.name ? "error" : ""}
              />
              <InputField
                label="Location"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                state={errors.location ? "error" : ""}
              />
              <InputField
                label="Local Government Council"
                name="localGovernmentCouncil"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.localGovernmentCouncil}
                state={errors.localGovernmentCouncil ? "error" : ""}
              />
              <InputField
                label="Administrator Name"
                value={values.administratorName}
                name="administratorName"
                onChange={handleChange}
                onBlur={handleBlur}
                state={errors.administratorName ? "error" : ""}
              />
              <InputField
                label="Email address"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                state={errors.email ? "error" : ""}
              />
              <InputField
                label="Telephone no"
                value={values.telephone}
                name="telephone"
                onChange={handleChange}
                onBlur={handleBlur}
                state={errors.telephone ? "error" : ""}
              />
              <InputField
                label="PTA"
                value={values.pta}
                name="pta"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputField
                label="Education Levels"
                value={values.educationLevels}
                name="educationLevels"
                onChange={handleChange}
                onBlur={handleBlur}
                state={errors.educationLevels ? "error" : ""}
              />
              <InputField
                type={"number"}
                min="1900"
                max="2099"
                label="Founding Year"
                placeholder="1990"
                value={values.foundingYear}
                name="foundingYear"
                onChange={handleChange}
                onBlur={handleBlur}
                state={errors.foundingYear ? "error" : ""}
              />
              <InputField
                type={"date"}
                label="Latest Date of Inspection"
                value={values.latestDateOfInspection}
                name="latestDateOfInspection"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="mt-5 flex justify-between xl:mt-0 xl:justify-start">
                <p
                  className={`mb-3 ml-3 text-xs font-bold text-navy-700 dark:text-white xl:text-sm`}
                >
                  Student Boarding
                </p>
                <Switch
                  extra={`ml-3`}
                  onClick={(e) => {
                    setStudentBoarding(!studentBoarding);
                  }}
                />
              </div>
              <div className=" mt-5 flex justify-between xl:mt-0 xl:justify-start">
                <p
                  className={`mb-3 ml-3 text-xs font-bold text-navy-700 dark:text-white xl:text-sm`}
                >
                  Security Guard
                </p>
                <Switch
                  extra={`ml-3`}
                  onClick={(e) => {
                    setSecurityGuard(!securityGuard);
                  }}
                />
              </div>
            </div>
            <div className="mt-5 flex w-full xl:mt-2">
              <button
                className="ml-auto rounded-xl bg-green-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200"
                onClick={handleSubmit}
              >
                Add School
                {loading && (
                  <Spinner
                    aria-label="Spinner button example"
                    size="sm"
                    className="ml-2"
                  />
                )}
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default AddSchool;
