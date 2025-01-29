import {MobileNavIcon} from "./MobileNavIcon.jsx";
import { ReactComponent as Icon } from './logo.svg';

function MobileNavBar() {
    const navStyle = {
        position: "fixed",
        bottom: 0,
        display:"flex",
        alignItems:"center",
        justifyContent: "space-evenly",
        width: "100vw",
    }
    return <div style={navStyle}>
        <MobileNavIcon href="/checklist"><Icon/></MobileNavIcon>
        <MobileNavIcon href="/home"><Icon/></MobileNavIcon>
        <MobileNavIcon href="/streak"><Icon/></MobileNavIcon>
    </div>
}

export {MobileNavBar}