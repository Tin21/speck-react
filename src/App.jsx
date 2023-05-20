import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import SignIn from "./pages/SignIn/SingIn";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ProtectedRoute } from "./api/ProtectedRoute/ProtectedRoute";

function App() {
  const { setIsLoggedIn, setIsAdmin } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.length !== 0) {
      if (localStorage.getItem("is_admin") === true)
        setIsAdmin(localStorage.getItem("is_admin"));
      setIsLoggedIn(true);
    }
  }, []);

  user && localStorage.setItem("is_admin", user.is_admin);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("jwt_token") ? true : false);
  }, [user]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
