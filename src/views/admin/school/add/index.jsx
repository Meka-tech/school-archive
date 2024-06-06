import axios from "axios";
import InputField from "components/fields/InputField";
import Switch from "components/switch";
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
    pta: Yup.string().required(),
    latestDateOfInspection: Yup.string().required(),
  });

  return (
    <div className="ml-auto mr-auto mt-5 w-7/12 rounded-xl bg-white px-6 py-4">
      <p className="mb-4  text-2xl font-semibold text-navy-800 ">
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
            console.log(response.data);
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
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <InputField
                label="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <InputField
                label="Location"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              />
              <InputField
                label="Local Government Council"
                name="localGovernmentCouncil"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.localGovernmentCouncil}
              />
              <InputField
                label="Administrator Name"
                value={values.administratorName}
                name="administratorName"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputField
                label="Email address"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputField
                label="Telephone no"
                value={values.telephone}
                name="telephone"
                onChange={handleChange}
                onBlur={handleBlur}
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
              />
              <InputField
                type={"number"}
                min="1900"
                max="2099"
                label="Founding Year"
                placeholder="2001"
                value={values.foundingYear}
                name="foundingYear"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputField
                type={"date"}
                label="Latest Date of Inspection"
                value={values.latestDateOfInspection}
                name="latestDateOfInspection"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="flex">
                <p
                  className={`mb-3 ml-3 text-sm font-bold text-navy-700 dark:text-white`}
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
              <div className="flex">
                <p
                  className={`mb-3 ml-3 text-sm font-bold text-navy-700 dark:text-white`}
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
            <div className="mt-2 flex w-full">
              <button
                className="ml-auto rounded-xl bg-green-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200"
                onClick={handleSubmit}
              >
                Add School
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default AddSchool;
