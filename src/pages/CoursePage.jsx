import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import Section from "../components/Section/Section";
import LectureImg1 from "../assets/images/lecture-1.jpg";
import { useParams } from "react-router-dom";
import coursesMock from "../utils/mock/courses";

const CoursePage = () => {
  const { id } = useParams(); //čita se sa url-a

  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  //triggera se u trenutku kad se renderira komponenta (odmah)
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  //triggerira se nakon što se courses učitaju (1000ms)
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
