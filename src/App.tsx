import './App.css'
import {useIsMobile} from "./hooks.ts";
import {MobileApp} from "./App/MobileApp.jsx";
import {DesktopApp} from "./App/DesktopApp.tsx";

function App() {
    const isTabletOrMobile = useIsMobile();

    return (
    <>
        {isTabletOrMobile ? <MobileApp /> : <DesktopApp />}
    </>
    )
}

export default App
