import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import SignIn from "./pages/SignIn/SingIn";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("is_admin"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("jwt_token") ? true : false
  );

  user && localStorage.setItem("is_admin", user.is_admin);

  useEffect(() => {
    console.log("user ulogiran:", isLoggedIn);
    console.log("je admin:", isAdmin);
  }, []);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("jwt_token") ? true : false);
    console.log("user ulogiran:", isLoggedIn);
    user && console.log("je admin iz usera:", user.is_admin);
  }, [user]);

  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route
            path="/sign-in"
            element={
              <SignIn
                setUser={setUser}
                user={user}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
