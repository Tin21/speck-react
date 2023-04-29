import React from "react";
import Course from "../components/Course/Course";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import HeroImg from "../assets/images/landing.jpg";
import { Link } from "react-router-dom";
import { Grid } from "../utils/styles/generalStyles";
import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";

const Home = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <>
      <Hero
        imgSrc={HeroImg}
        imgAlt="Hero image"
        title="Learn what matters with Speck and FOI"
        subtitle="Make a turnaround in your career or upgrade your current skill
                set with knowledge-based lessons from IT practice."
        buttonText="Explore Courses"
      />
      <Section
        title="Open your new possibilities"
        subtitle="We recommend that you choose one of the featured courses. If you
            don't find anything for you here, search for courses in detail on
            the courses page."
      >
        {courses && ( // ako courses postoji ucitaj Grid
          <Grid>
            {courses.map(
              (course, index) =>
                index < 4 && (
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

export default Home;
