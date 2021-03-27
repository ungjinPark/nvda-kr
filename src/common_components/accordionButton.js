import { createRef, useState } from "react";
const DefaultComponent = ()=>{
    return (
        <div>
            Accordion Content가 설정되지 않았습니다.
        </div>
    )
}


const Accordion = ({
    ButtonSlot,
    expanded,
    ButtonClassName,
    ContainerComponentSlot,
    ContentBoxClassName,
    setSymbols,
    useSymbol,
    ExitButtonInnerHTML,
    useExitButton
})=>{
    const [getExpandedState,setExpandedState]=useState(expanded);
    const [getUseStateSymbol,setUseStateSymbol]=useState(useSymbol);
    const [getUseExitButton,setUseExitButton] =useState(useExitButton);
    const toggleExpandState = ()=>{
        setExpandedState(!getExpandedState);
    }
    const EntranceButtonRef = createRef();
    return (
        <section>
            <button ref={EntranceButtonRef} onClick={toggleExpandState} aria-expanded={getExpandedState} className={ButtonClassName}>
                <span className="slot-button-text">{ButtonSlot}</span>
                {
                    (()=>{
                        if(getUseStateSymbol){
                            if(getExpandedState){
                                return (
                                    <span aria-hidden={true} className="state-symbol">{setSymbols[1]}</span>
                                )
                            }else{
                                return (
                                    <span aria-hidden={true} className="state-symbol">{setSymbols[0]}</span>
                                )
                            }
                        }
                    })()
                }
            </button>
            <div className={ContentBoxClassName}>
                {
                    (()=>{
                        if(getExpandedState === true){
                            return (
                                <>
                                <ContainerComponentSlot />
                                {(()=>{
                                    if(getUseExitButton === true){
                                        return (
                                            <button onClick={(e)=>{
                                                setExpandedState(false);
                                                const focus = EntranceButtonRef.current;
                                                setTimeout(()=>{
                                                    focus.focus();
                                                },200)
                                            }} className="fency-button accordion-close">{ExitButtonInnerHTML}</button>
                                        )
                                    }else{
                                        return;
                                    }
                                })()}
                                </>
                            )
                        }else{
                            return (
                                <>
                                </>
                            );
                        }
                    })()
                }
            </div>
        </section>
    );
}
Accordion.defaultProps = {
    expanded:false,
    ButtonClassName:"fency-button nvda-kr-accordion round-normal size-normal",
    ContentBoxClassName:"accordion-content-box",
    ButtonSlot:"set your button content",
    useSymbol:false,
    useExitButton:false,
    ExitButtonInnerHTML:"닫기",
    setSymbols:[
        <>펼치기</>,
        <>접기</>
    ],
    ContainerComponentSlot:DefaultComponent,
}

export default Accordion;