import Header from "./components/Header/Header"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";



function App() {

  return (
  <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element ={<Courses/>} />
          <Route path="/course" element ={<CoursePage/>} />
        </Routes>
      </main>
    </>
  );
  
}

export default App;
