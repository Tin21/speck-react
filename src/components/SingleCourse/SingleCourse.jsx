import React from "react";
import PropTypes from "prop-types";
import {
  Section as SectionWrapper,
  SectionInner,
  SectionTitle,
} from "../Section/SectionStyle";
import {
  SingleCourse as SingleCourseWrapper,
  SingleCourseFigure,
  SingleCourseImage,
  SingleCourseContent,
} from "./SingleCourseStyle";

const SingleCourse = ({ imgSrc, imgAlt, title, content }) => {
  return (
    <SectionWrapper>
      <SectionInner>
        <SectionTitle>{title}</SectionTitle>
        <SingleCourseWrapper>
          <SingleCourseFigure>
            <SingleCourseImage src={imgSrc} alt={imgAlt} />
          </SingleCourseFigure>
          <SingleCourseContent>{content}</SingleCourseContent>
        </SingleCourseWrapper>
      </SectionInner>
    </SectionWrapper>
  );
};

SingleCourse.PropTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default SingleCourse;
