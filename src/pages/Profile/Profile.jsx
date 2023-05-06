import React from "react";
import {
  Section,
  SectionSubtitle,
  SectionTitle,
  SectionInner,
  SectionTitleInner,
} from "../../components/Section/SectionStyle";
import { Button, Grid } from "../../utils/styles/generalStyles";

const Profile = () => {
  return (
    <Section>
      <SectionInner>
        <SectionTitleInner>
          <SectionTitle secondaryTitle>Profile</SectionTitle>
          <Button isEdit>Edit</Button>
        </SectionTitleInner>
        <Grid isProfilePage>
          <div>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaa</p>
            <p>aaaaaaa</p>
          </div>
          <p>aaaaaaa</p>
          <div>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
        </Grid>
      </SectionInner>
    </Section>
  );
};

export default Profile;
