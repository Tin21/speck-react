import React from 'react'
import PropTypes from "prop-types";
import "./Section.scss";


const Section = ({title, subtitle, children}) => {
  return (
    <section className="section">
        <div className="section__inner">
          <h2 className="section__title">{title}</h2>
          <p className="section__subtitle">
            {subtitle}
          </p>
          {children}
        </div>
        
    </section>
  )
}

Section.PropTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node
}

export default Section;