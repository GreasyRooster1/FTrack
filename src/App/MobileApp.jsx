import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Index} from "../Pages/Index.tsx";
import {MobileNavBar} from "./Nav/MobileNavBar.jsx";

function MobileApp() {
    return <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/streak" element={<Streak />} />
        </Routes>
        <MobileNavBar/>
    </Router>
}

export {MobileApp}