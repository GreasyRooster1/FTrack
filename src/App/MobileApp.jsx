import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Index} from "../Pages/Index.tsx";
import {MobileNavBar} from "./Nav/MobileNavBar.js";

function MobileApp() {
    return <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
        </Routes>
        <MobileNavBar/>
    </Router>
}

export {MobileApp}