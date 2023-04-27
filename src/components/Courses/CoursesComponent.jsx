import React from 'react'
import "../components/Grid/grid";

const CoursesComponent = ({title,subtitle,children}) => {
    return (
      <>
        <section className="Section">
          <div className="Section-Inner">
            <h2 className="Section-Title">{title}</h2>
            <p className="Section-Subtitle">
              {subtitle}
            </p>
            {children}
          </div>
          
      </section>
        
      </>
    )
  }
  
  CoursesComponent.PropTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node
  }

export default CoursesComponent;