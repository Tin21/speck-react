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
        <Grid isProfilePage>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
            }}
          >
            {(formik) => (
              <Form isProfileForm>
                <FormRow>
                  {/* <Label htmlFor="firstName">First name</Label> */}
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
      </SectionInner>
    </Section>
  );
};

export default Profile;
