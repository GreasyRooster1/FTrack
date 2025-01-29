import {MobileNavIcon} from "./MobileNavIcon.tsx";

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
        <MobileNavIcon href="/checklist" src=""/>
        <MobileNavIcon href="/home" src=""/>
        <MobileNavIcon href="/streak" src=""/>
    </div>
}

export {MobileNavBar}