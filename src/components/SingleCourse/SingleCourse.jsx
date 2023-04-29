import React from "react";
import PropTypes from "prop-types";
import "./SingleCourse.scss";
//import "../Section/Section.scss";

const SingleCourse = ({ imgSrc, imgAlt, title, content }) => {
  return (
    <section className="Section">
      <div className="Section-Inner">
        <h1 className="Section-Title">{title}</h1>
        <article className="SingleCourse">
          <figure className="SingleCourse-Figure">
            <img src={imgSrc} alt={imgAlt} className="SingleCourse-Image" />
          </figure>
          <p className="SingleCourse-Content">{content}</p>
        </article>
      </div>
    </section>
  );
};

SingleCourse.PropTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default SingleCourse;
