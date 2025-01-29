import {useState} from "react";

function ChecklistItem(props) {
    let [checked,setChecked] = useState(false);

    return <div>
        <span>{checked}</span>
        <div>{props.children}</div>
    </div>
}

export {ChecklistItem}