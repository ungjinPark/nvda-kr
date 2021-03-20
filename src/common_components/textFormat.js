const TextIcon = ({iconName,iconAlt}) => {
    return (
        <span role="none" className={`text text-icon bold icon-${iconName}`}>
            <A11yText>{iconAlt}</A11yText>
        </span>
    )
}
TextIcon.defaultProps={
    iconAlt:"",
}

const A11yText = ({children}) => {
    return (
        <span role="none" className="invisible-a11y">
            {children}
        </span>
    )
}

const EM = ({children})=>{
    return (
        <span role="none" className="text bold color-emphasis">
            {children}
        </span>
    )
}

export {EM,A11yText,TextIcon};