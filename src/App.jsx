import {BrowserRouter, Routes, Route} from "react-router";
import {HomePage} from "./pages/HomePage.jsx";
import { ClubsPage } from "./pages/ClubsPage.jsx";
import { EventsPage } from "./pages/EventsPage.jsx";
import {NavBar} from "./components/NavBar.jsx";
function App() {


    return (
        <>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path="/clubs" element={<ClubsPage />}/>
                    <Route path="/events" element={<EventsPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
