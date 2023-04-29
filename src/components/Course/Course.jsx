import React from "react";
import PropTypes from "prop-types";
import "./Course.scss";
import { Link } from "react-router-dom";

const Course = ({ imgSrc, imgAlt, title, subtitle, time, id }) => {
  return (
    <article className="Course">
      <Link to={`/courses/${id}`}>
        <figure className="Course-Figure">
          <img className="Course-Image" src={imgSrc} alt={imgAlt} />
        </figure>
        <h3 className="Course-Title">{title}</h3>
        <p className="Course-Subtitle">{subtitle}</p>
        <p className="Course-Time">{time}</p>
      </Link>
    </article>
  );
};

Course.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.number,
};

export default Course;
