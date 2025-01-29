import React, {useEffect, useState} from "react";
import {ChecklistItem} from "./ChecklistItem.jsx";

const style = {
    display: 'flex',
    flexDirection: 'column',

}
const headerStyle = {

}
const progressStyle = {

}

function Checklist(props) {
    let [items, setItems] = useState([])

    useEffect(() => {
        let newArray = Array(props.children.length).fill(false);
        for(let i in items){
            newArray[i] =items[i]
        }

        setItems(newArray)
    },[setItems,items])

    let listItems = [];
    for(let i in props.children){
        let child = React.cloneElement(props.children[i],{index:i});
        listItems[i] =child
    }

    return <div style={style}>
        <div style={headerStyle}>
            <progress id="file" value="32" max="100" style={progressStyle}> 32%</progress>
        </div>

        {listItems}
    </div>
}

export {Checklist}