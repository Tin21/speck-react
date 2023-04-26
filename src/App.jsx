import Course from "./components/Course/Course";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import LectureImg1 from "./assets/images/lecture-1.jpg";
import LectureImg2 from "./assets/images/lecture-2.jpg";
import LectureImg3 from "./assets/images/lecture-3.jpg";
import LectureImg4 from "./assets/images/lecture-4.jpg";
import HeroImg from "./assets/images/landing.jpg";


function App() {

  return (
  <>
      <Header />
      <main>
        <Hero imgSrc={HeroImg} imgAlt="Hero image" title="Learn what matters with Speck and FOI" subtitle="Make a turnaround in your career or upgrade your current skill
                set with knowledge-based lessons from IT practice." buttonText="Explore Courses"/>
        <Section title="Open your new possibilities" subtitle="We recommend that you choose one of the featured courses. If you
            don't find anything for you here, search for courses in detail on
            the courses page.">
            <Grid>
              <Course imgSrc={LectureImg1} imgAlt="Course image" title="HTML & CSS" subtitle="Learn HTML & CSS basics.." time="105 min"/>
              <Course imgSrc={LectureImg2} imgAlt="Course image" title="Version Control System" subtitle="Learn Git and Gitflow basics.." time="90 min"/>
              <Course imgSrc={LectureImg3} imgAlt="Course image" title="Advanced CSS" subtitle="BEM methodology, grid, flex.." time="120 min"/>
              <Course imgSrc={LectureImg4} imgAlt="Course image" title="JavaScript basics" subtitle="Learn JavaScript basics" time="130 min"/>
            </Grid>
        </Section>
      </main>
    </>
  );
  
}

export default App;
