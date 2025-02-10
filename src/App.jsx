import {BrowserRouter, Routes, Route} from "react-router";
import {Home} from "./pages/Home.jsx";
import {NavBar} from "./components/NavBar.jsx";
function App() {


    return (
        <>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
