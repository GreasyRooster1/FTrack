import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Index} from "../Pages/Index.tsx";
import {MobileNavBar} from "./Nav/MobileNavBar.jsx";
import {ChecklistPage} from "../Pages/ChecklistPage.jsx";

function MobileApp() {
    return <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            {/*<Route path="/streak" element={<StreakPage />} />*/}
        </Routes>
        <MobileNavBar/>
    </Router>
}

export {MobileApp}