import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";
import { ClubsPage } from "./pages/ClubsPage.jsx";
import { EventsPage } from "./pages/EventsPage.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ClubPage } from "./pages/ClubPage.jsx";
import { EventPage } from "./pages/EventPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { useEffect } from "react";
function App() {
  const [userLogged, setUserLogged] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      setUserLogged(user);
    }
  }, [isAuthenticated, user]);
  useEffect(() => {
    if (userLogged) {
      sessionStorage.setItem("userLogged", JSON.stringify(userLogged));
    }
  }, [userLogged]);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/clubs/:id" element={<ClubPage />} />
          <Route
            path="/events/:id"
            element={<EventPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
