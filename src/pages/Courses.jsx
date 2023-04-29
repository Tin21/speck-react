import React from "react";
import Course from "../components/Course/Course";
import Section from "../components/Section/Section";
import LectureImg1 from "../assets/images/lecture-1.jpg";
import LectureImg2 from "../assets/images/lecture-2.jpg";
import LectureImg3 from "../assets/images/lecture-3.jpg";
import LectureImg4 from "../assets/images/lecture-4.jpg";
import LectureImg5 from "../assets/images/lecture-5.jpg";
import LectureImg6 from "../assets/images/lecture-6.jpg";
import LectureImg7 from "../assets/images/lecture-7.jpg";
import LectureImg8 from "../assets/images/lecture-8.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid } from "../utils/styles/generalStyles";
import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <>
      <Section
        title="Browse all our courses"
        subtitle="We recommend that you choose one of the featured courses. If you
            don't find anything for you here, search for courses in detail on
            the courses page."
      >
        {courses && ( // ako courses postoji ucitaj Grid
          <Grid>
            {courses.map(
              (course, index) =>
                index < 8 && (
                  <Course
                    key={course.id}
                    imgSrc={course.imgSrc}
                    imgAlt={course.imgAlt}
                    title={course.title}
                    subtitle={course.subtitle}
                    time={course.time}
                    id={course.id}
                  />
                )
            )}
          </Grid>
        )}
      </Section>
    </>
  );
};

Courses.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Courses;
