interface mobileNavIconProps{
    href: string,
    src: string
}

function MobileNavIcon(props: mobileNavIconProps) {
    return <a href = {props.href}>
        <img src={props.src} alt="icon"></img>
    </a>
}

export {MobileNavIcon};
export type { mobileNavIconProps };