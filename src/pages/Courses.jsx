import React from 'react'
import Course from "../components/Course/Course";
import Grid from "../components/Grid/Grid";
import Section from "../components/Section/Section";
import LectureImg1 from "../assets/images/lecture-1.jpg";
import LectureImg2 from "../assets/images/lecture-2.jpg";
import LectureImg3 from "../assets/images/lecture-3.jpg";
import LectureImg4 from "../assets/images/lecture-4.jpg";
import LectureImg5 from "../assets/images/lecture-5.jpg";
import LectureImg6 from "../assets/images/lecture-6.jpg";
import LectureImg7 from "../assets/images/lecture-7.jpg";
import LectureImg8 from "../assets/images/lecture-8.jpg";
import "../components/Grid/grid";
import PropTypes from "prop-types";

const Courses = () => {
  return (
    <>
      <Section title="Browse all our courses" subtitle="We recommend that you choose one of the featured courses. If you
            don't find anything for you here, search for courses in detail on
            the courses page." >

            <Grid>
              <Course imgSrc={LectureImg1} imgAlt="Course image" title="HTML & CSS" subtitle="Learn HTML & CSS basics.." time="90 min"/>
              <Course imgSrc={LectureImg2} imgAlt="Course image" title="Version Control System" subtitle="Learn Git and Gitflow basics.." time="90 min"/>
              <Course imgSrc={LectureImg3} imgAlt="Course image" title="Advanced CSS" subtitle="BEM methodology, grid, flex.." time="120 min"/>
              <Course imgSrc={LectureImg4} imgAlt="Course image" title="JavaScript basics" subtitle="Learn JavaScript basics" time="130 min"/>
              <Course imgSrc={LectureImg5} imgAlt="Course image" title="JavaScript basics" subtitle="Learn JavaScript basics" time="130 min"/>
              <Course imgSrc={LectureImg6} imgAlt="Course image" title="JavaScript basics" subtitle="Learn JavaScript basics" time="130 min"/>
              <Course imgSrc={LectureImg7} imgAlt="Course image" title="JavaScript basics" subtitle="Learn JavaScript basics" time="130 min"/>
              <Course imgSrc={LectureImg8} imgAlt="Course image" title="JavaScript basics" subtitle="Learn JavaScript basics" time="130 min"/>
            </Grid>
      </Section>
    </>
  )
}

Section.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}

export default Courses;