import {MobileNavIcon} from "./MobileNavIcon.jsx";
import logo from '../../assets/react.svg';

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
        <MobileNavIcon href="/checklist">
            <img src={logo}/>
        </MobileNavIcon>
        <MobileNavIcon href="/home">
            <img src={logo}/>
        </MobileNavIcon>
        <MobileNavIcon href="/streak">
            <img src={logo}/>
        </MobileNavIcon>
    </div>
}

export {MobileNavBar}