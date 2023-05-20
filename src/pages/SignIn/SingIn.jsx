import React, { useContext } from "react";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ErrorMessage,
  Form,
  FormRow,
  Field,
  Button,
  FormSuccessMessage,
} from "../../utils/styles/generalStyles";
import { loginUser, getUsers } from "../../api/users";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const SingIn = (props) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const { user, setUser, setIsAdmin } = useContext(AuthContext);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const reponse = await loginUser(values);
      const users = await getUsers(reponse.access_token);
      const user = users.data.find((user) => user.email === values.email);
      setUser(user);
      setSuccessMessage({
        error: false,
        message: `User ${user.first_name} ${user.last_name} is logged succesfully`,
      });

      localStorage.setItem("jwt_token", reponse.access_token);
      resetForm();
    } catch (error) {
      setSuccessMessage({
        error: true,
        message: "User is not logged successfuly!",
      });
    } finally {
      setSubmitting(false);
      setIsAdmin(user.is_admin);
      setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);
    }
  };

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
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            {successMessage && (
              <FormRow>
                <FormSuccessMessage isError={successMessage.error}>
                  {successMessage.message}
                </FormSuccessMessage>
              </FormRow>
            )}
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
                {formik.isSubmitting ? "Processing..." : "Sign in"}
              </Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};
export default SingIn;
