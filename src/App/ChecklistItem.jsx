import {useState} from "react";

function ChecklistItem(props) {
    let [checked,setChecked] = useState(false);

    return <div onClick={()=>{setChecked(!checked)}}>
        <span>{checked}</span>
        <div>{props.children}</div>
    </div>
}

export {ChecklistItem}