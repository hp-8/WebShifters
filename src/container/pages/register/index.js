import React from "react";
import  {Link} from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./registerForm.css";
import reactRouterDom from "react-router-dom";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="label-form">
        {label}
      </label>
      <input className="input-form" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={field.id || field.name} className="label-form">
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const RegisterForm = () => {
  return (

    <div className="register-form">

      <Link to = "/WebShifters" className = "back-button">
      &#8592; Back
      </Link>

      <h1 className="text-formulir">Register an Appointment</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          serviceRequired: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phoneNumber: Yup.string()
            .matches(/^[0-9]+$/, "Only digits are allowed")
            .required("Required"),
          serviceRequired: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <CustomTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="John Doe"
            />
            <CustomTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
            />
            <div className="phone-input">
              <CustomSelect
                label="Country Code"
                name="countryCode"
                className="input-select"
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                {/* Add more country codes as needed */}
              </CustomSelect>
              <CustomTextInput
                label="Phone Number"
                name="phoneNumber"
                type="text"
                placeholder="1234567890"
              />
            </div>
            <CustomTextInput
              label="Service Required"
              name="serviceRequired"
              type="text"
              placeholder="Enter the service required"
            />
            <button type="submit" className="btn-submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
