import React from "react";
import {
  Section,
  SectionSubtitle,
  SectionTitle,
  SectionInner,
  SectionTitleInner,
} from "../../components/Section/SectionStyle";
import {
  Button,
  Grid,
  Form,
  FormRow,
  Field,
  Option,
  Label,
  Select,
  ErrorMessage,
  ResetPassBackground,
  ResetPassTitle,
  ResetPassSubtitle,
} from "../../utils/styles/generalStyles";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [data, setData] = useState({
    firstName: "Tin",
    lastName: "Franić",
    email: "tin.franic8@gmail.com",
    githubUsername: "Tin21",
    zeplinUsername: "tin21",
    activeFacultyYear: "5",
  });

  const changeData = (newData) => {
    setData({
      firstName: newData.first_name,
      lastName: newData.last_name,
      email: newData.email,
      githubUsername: newData.github_username,
      zeplinUsername: newData.zeplin_username,
      activeFacultyYear: newData.active_faculty_year,
      /* ...newData,
      [newData.target.name]: newData.target.value, */
    });
    console.log(newData);
  };

  const changeState = () => {
    setEditing(!editing);
  };

  return (
    <Section>
      <SectionInner>
        <SectionTitleInner>
          <SectionTitle secondaryTitle>Profile</SectionTitle>

          {!editing && (
            <Button isEdit onClick={() => changeState()}>
              Edit
            </Button>
          )}
          {editing && (
            <Button isSecondary onClick={() => changeState()}>
              Cancel
            </Button>
          )}
        </SectionTitleInner>

        {!editing && (
          <Grid isProfilePage>
            <Formik>
              {(formik) => (
                <Form isProfileForm>
                  <FormRow>
                    <Field
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      disabled
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>

                  <FormRow>
                    <Field
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      disabled
                    />
                    <ErrorMessage component={"div"} name="lastName" />
                  </FormRow>

                  <FormRow>
                    <Field
                      type="email"
                      name="email"
                      value={data.email}
                      disabled
                    />
                    <ErrorMessage component={"div"} name="email" />
                  </FormRow>

                  <FormRow>
                    <Field
                      type="text"
                      name="githubUsername"
                      value={data.githubUsername}
                      disabled
                    />
                    <ErrorMessage component={"div"} name="githubUsername" />
                  </FormRow>

                  <FormRow>
                    <Field
                      type="text"
                      name="zeplinUsername"
                      value={data.zeplinUsername}
                      disabled
                    />
                    <ErrorMessage component={"div"} name="zeplinUsername" />
                  </FormRow>

                  <FormRow>
                    <Select
                      id="activeFacultyYear"
                      value={data.activeFacultyYear}
                      disabled
                    >
                      <Option value="0">Not a student</Option>
                      <Option value="1">1st faculty year</Option>
                      <Option value="2">2nd faculty year</Option>
                      <Option value="3">3rd faculty year</Option>
                      <Option value="4">4th faculty year</Option>
                      <Option value="5">5th faculty year</Option>
                    </Select>
                    <ErrorMessage component={"div"} name="activeFacultyYear" />
                  </FormRow>
                </Form>
              )}
            </Formik>
            <ResetPassBackground>
              <ResetPassTitle>Reset password</ResetPassTitle>
              <ResetPassSubtitle>
                In order to reset the password click on Edit button.
              </ResetPassSubtitle>
            </ResetPassBackground>
          </Grid>
        )}
        {editing && (
          <Grid isProfilePage>
            <Formik
              initialValues={{
                firstName: `${data.firstName}`,
                lastName: `${data.lastName}`,
                email: `${data.email}`,
                githubUsername: `${data.githubUsername}`,
                zeplinUsername: `${data.zeplinUsername}`,
                activeFacultyYear: `${data.activeFacultyYear}`,
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  const newData = {
                    first_name: values.firstName,
                    last_name: values.lastName,
                    email: values.email,
                    github_username: values.githubUsername,
                    zeplin_username: values.zeplinUsername,
                    active_faculty_year:
                      parseInt(values.activeFacultyYear) === 0
                        ? null
                        : parseInt(values.activeFacultyYear),
                    is_admin: false,
                  };
                  alert(JSON.stringify(newData, null, 2));
                  changeState();
                  setSubmitting(false);
                  changeData(newData);
                  resetForm();
                }, 1000);
              }}
            >
              {(formik) => (
                <Form isProfileForm>
                  <FormRow>
                    <Label htmlFor="firstName">First name</Label>
                    <Field
                      type="text"
                      name="firstName"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>

                  <FormRow>
                    <Label htmlFor="lastName">Last name</Label>
                    <Field
                      type="text"
                      name="lastName"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="lastName" />
                  </FormRow>

                  <FormRow>
                    <Label htmlFor="email">Email</Label>
                    <Field
                      type="email"
                      name="email"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="email" />
                  </FormRow>

                  <FormRow>
                    <Label htmlFor="githubUsername">Github</Label>
                    <Field
                      type="text"
                      name="githubUsername"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="githubUsername" />
                  </FormRow>

                  <FormRow>
                    <Label htmlFor="zeplinUsername">Zeplin</Label>
                    <Field
                      type="text"
                      name="zeplinUsername"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="zeplinUsername" />
                  </FormRow>

                  <FormRow>
                    <Label htmlFor="activeFacultyYear">
                      Active faculty year
                    </Label>
                    <Select
                      id="activeFacultyYear"
                      disabled={formik.isSubmitting}
                      {...formik.getFieldProps("activeFacultyYear")}
                    >
                      <Option value="0">Not a student</Option>
                      <Option value="1">1st faculty year</Option>
                      <Option value="2">2nd faculty year</Option>
                      <Option value="3">3rd faculty year</Option>
                      <Option value="4">4th faculty year</Option>
                      <Option value="5">5th faculty year</Option>
                    </Select>
                    <ErrorMessage component={"div"} name="activeFacultyYear" />
                  </FormRow>

                  <FormRow>
                    <Button
                      isSecondary
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting
                        ? "Processing..."
                        : "Update user data"}
                    </Button>
                  </FormRow>
                </Form>
              )}
            </Formik>

            {!editing && (
              <ResetPassBackground>
                <ResetPassTitle>Reset password</ResetPassTitle>
                <ResetPassSubtitle>
                  In order to reset the password click on Edit button.
                </ResetPassSubtitle>
              </ResetPassBackground>
            )}
            {editing && (
              <ResetPassBackground>
                <ResetPassTitle>Reset password</ResetPassTitle>
                <Formik
                  initialValues={{
                    oldPassword: "",
                    newPassword: "",
                    repeatPassword: "",
                  }}
                >
                  {(formik) => (
                    <Form isProfileForm>
                      <FormRow>
                        <Field
                          type="password"
                          name="oldPassword"
                          placeholder="Old password..."
                          disabled={formik.isSubmitting}
                        />
                        <ErrorMessage component={"div"} name="oldPassword" />
                      </FormRow>

                      <FormRow>
                        <Field
                          type="password"
                          name="newPassword"
                          placeholder="New password..."
                          disabled={formik.isSubmitting}
                        />
                        <ErrorMessage component={"div"} name="newPassword" />
                      </FormRow>

                      <FormRow>
                        <Field
                          type="password"
                          name="passwordRepeat"
                          placeholder="Repeat new password"
                          disabled={formik.isSubmitting}
                        />
                        <ErrorMessage component={"div"} name="passwordRepeat" />
                      </FormRow>

                      <FormRow>
                        <Button
                          isSecondary
                          type="submit"
                          disabled={formik.isSubmitting}
                        >
                          {formik.isSubmitting
                            ? "Processing..."
                            : "Update password"}
                        </Button>
                      </FormRow>
                    </Form>
                  )}
                </Formik>
              </ResetPassBackground>
            )}
          </Grid>
        )}
      </SectionInner>
    </Section>
  );
};

export default Profile;
