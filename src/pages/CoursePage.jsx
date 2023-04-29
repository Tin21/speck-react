import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import Section from "../components/Section/Section";
import LectureImg1 from "../assets/images/lecture-1.jpg";
import { useParams } from "react-router-dom";
import coursesMock from "../utils/mock/courses";

const CoursePage = () => {
  const { id } = useParams();

  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  useEffect(() => {
    courses && setCourse(courses.find((course) => course.id === parseInt(id)));
  }, [courses]);

  return (
    course && (
      <>
        <SingleCourse
          imgSrc={course.imgSrc}
          imgAlt={course.imgAlt}
          title={course.title}
          content={course.content}
        />
      </>
    )
  );
};

CoursePage.PropTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CoursePage;
