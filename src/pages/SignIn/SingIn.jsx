import React from "react";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ErrorMessage,
  Form,
  FormRow,
  Field,
  Button,
} from "../../utils/styles/generalStyles";

const SingIn = () => {
  return (
    <Section title="Sign in">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("First name is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              email: values.email,
              password: values.password,
            };
            alert(JSON.stringify(data, null, 2));
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {(formik) => (
          <Form>
            <FormRow>
              <Field
                type="email"
                name="email"
                placeholder="Email..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="email" />
            </FormRow>

            <FormRow>
              <Field
                type="password"
                name="password"
                placeholder="Password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="password" />
            </FormRow>
            <FormRow>
              <Button isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Register"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SingIn;
