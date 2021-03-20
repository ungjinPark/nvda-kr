const PrettyUl = ({children})=>{
    return (
        <ul className="pretty-ul">
            {children}
        </ul>
    );
}
const PrettyLi = ({children})=>{
    return (
        <li>
            <span role="none" className="li-bullet" aria-hidden="true">
                {/*Do not write the component and tag here*/}
            </span>
            <span role="none" className="li-text">
                {children}
            </span>
        </li>
    );
}
export {PrettyLi,PrettyUl};