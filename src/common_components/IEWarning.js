import { A11yText, EM } from "./textFormat"
import { isIE, isEdge } from "react-device-detect";
const IEWarningArea = () => {
  if(isIE || isEdge){
    return (
      <section class="suggest_modern_browser"
      role="alert region">
        <h2 className="text block big bold">최신 브라우저 사용 제안</h2>
        <p className="text block small">Internet Explorer<span class="icon icon-IE" aria-hidden="true"></span> 또는 구버전 Edge<span class="icon icon-edge" aria-hidden="true"></span>가 감지되었습니다.</p>
        <p className="text block small">오래된 구형 브라우저는 일부 기능이 제한될 수 있으며, 화면에 표시되는 레이아웃이 다를 수 있습니다.</p>
        <p className="text block small">또한 NVDA에서는 Internet Explorer보다 최신 브라우저로 더 많은 정보를 제공합니다.</p>
        <div>
          <h3>최신 브라우저 다운로드</h3>
          <ul className="browserLinkList">
            <li>
              <a href="https://www.google.com/intl/ko/chrome/#js-download-hero" class="icon-chrome">
                <A11yText>Google Chrome 다운로드</A11yText>
              </a>
            </li>
            <li>
              <a href="https://www.mozilla.org/ko/firefox/download/thanks/" class="icon-firefox">
                <A11yText>Mozilla Firefox 다운로드</A11yText>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }else{
    return (<></>);
  }
}



export default IEWarningArea;