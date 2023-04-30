import React from "react";
import Course from "../components/Course/Course";
import Section from "../components/Section/Section";
import PropTypes from "prop-types";
import { Grid } from "../utils/styles/generalStyles";
import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";
import SearchBar from "../components/SearchBar/SearchBar";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  const handleSearch = (id) => {
    let inputValue = "";
    inputValue = document.getElementById(`${id}`).value;

    if (inputValue !== "")
      setCourses(
        coursesMock.filter((coursesMock) =>
          coursesMock.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    else if (inputValue === "") setCourses(coursesMock);

    return console.log(`${inputValue}`);
  };

  return (
    <>
      <SearchBar
        placeholder="Browse courses"
        disabled="false"
        onChangeCall={handleSearch}
      />

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

Courses.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Courses;
