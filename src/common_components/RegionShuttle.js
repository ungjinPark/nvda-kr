import { useEffect, useState } from "react"
import {isIE,isEdge} from 'react-device-detect';
const RegionShuttleLink = ({
    DestinationHash,
    children,
    LinkId
}) => {
    return (
        <a href={DestinationHash}
        id={LinkId ? LinkId : null} className="region-shuttle-link">{children}</a>
    )
}

const SkipNavigation = () => {
    const [isFocusIn,setFocusIn] = useState(false);

    const getFocusInStateClass = isFocusIn ? '' : "invisible-a11y out";

    useEffect(()=>{
        const topLayout = document.querySelector('.layout-bar.common-tops');
        topLayout.classList.toggle('skip-shown',isFocusIn);
    },[isFocusIn])

    const showLink = () => {
        setFocusIn(true);
    }
    const hideLink = () => {
        setFocusIn(false);
    }

    return (
        <div className={`floating-area skipNav ${getFocusInStateClass}`}>
            <a id="skipTo-main" href="#main_content"
            onFocus={showLink} onBlur={hideLink}>본문으로 바로가기</a>
        </div>
    );
}

export {RegionShuttleLink,SkipNavigation};