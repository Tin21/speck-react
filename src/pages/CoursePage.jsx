import React from 'react'
import PropTypes from 'prop-types'
import SingleCourse from '../components/SingleCourse/SingleCourse'
import LectureImg1 from "../assets/images/lecture-1.jpg";

const CoursePage = () => {
  return (
    <>
        <SingleCourse imgSrc={LectureImg1} imgAlt="Course image" title="Introduction" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              praesentium, assumenda pariatur eos quam debitis esse vero ab, quo
              beatae officia aut. Unde atque, veritatis at praesentium minima
              veniam necessitatibus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestias cumque hic, facilis quam maxime
              repellat voluptates aperiam in tempore aliquam magnam accusamus
              animi. Odit nihil amet, ipsa vero eveniet tempore. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptas sit eaque
              atque illum modi possimus, perspiciatis reiciendis ea quaerat
              magni optio ut minus ad quos quibusdam adipisci, nam et amet.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              debitis quae iusto dicta officia dolorum non similique sapiente
              praesentium ducimus voluptates unde, porro qui illo doloribus
              corporis corrupti animi repellendus." />
    </>
  )
}

CoursePage.PropTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
}

export default CoursePage