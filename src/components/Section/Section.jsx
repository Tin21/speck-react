import React from "react";
import PropTypes from "prop-types";
import {
  Section as SectionWrapper,
  SectionInner,
  SectionTitle,
  SectionSubtitle,
} from "./SectionStyle";

const Section = ({ title, subtitle, children }) => {
  return (
    <SectionWrapper>
      <SectionInner>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

Section.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
