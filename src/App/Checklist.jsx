function Checklist(props) {
    const style = {
        display: 'flex',
        flexDirection: 'column',

    }
    const headerStyle = {

    }
    const progressStyle = {

    }
    return <div style={style}>
        <div style={headerStyle}>
            <progress id="file" value="32" max="100" style={progressStyle}> 32%</progress>
        </div>
        {props.children}
    </div>
}

export {Checklist}