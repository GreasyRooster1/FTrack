import {useMediaQuery} from "react-responsive";

function useIsMobile() {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    return isMobile
}

export {useIsMobile}