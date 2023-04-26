import React from 'react';
import PropTypes from 'prop-types';
import "./Course.scss";

const Course = ({imgSrc, imgAlt, title, subtitle, time}) => {
  return (
    <article className="course">
      <figure className="course__figure">
        <img
          className="course__image"
          src={imgSrc}
          alt={imgAlt}
        />
      </figure>
      <h3 className="course__title">{title}</h3>
      <p className="course__subtitle">{subtitle}</p>
      <p className="course__time">{time}</p>
  </article>
  )
}

Course.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    time: PropTypes.string,
}

export default Course;