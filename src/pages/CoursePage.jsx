import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import { useParams } from "react-router-dom";
import coursesMock from "../utils/mock/courses";
import { Oval } from "react-loader-spinner";
import SpinnerComponent from "../components/Spinner/SpinnerComponent";

const CoursePage = () => {
  const { id } = useParams(); //čita se sa url-a

  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {}, []);

  //triggera se u trenutku kad se renderira komponenta (odmah)
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  //triggerira se nakon što se courses učitaju (1000ms)
  useEffect(() => {
    courses && setCourse(courses.find((course) => course.id === parseInt(id)));
  }, [courses !== null]);

  return (
    <>
      {course === null ? ( //dok je course null prikaži spinner, inače course
        <SpinnerComponent />
      ) : (
        <SingleCourse
          imgSrc={course.imgSrc}
          imgAlt={course.imgAlt}
          title={course.title}
          content={course.content}
        />
      )}
    </>
  );
};

CoursePage.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CoursePage;
