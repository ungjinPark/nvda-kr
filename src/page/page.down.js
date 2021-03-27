import { useState } from "react";
import Accordion from "../common_components/accordionButton";
import {PrettyLi as Li, PrettyUl as Ul} from "../common_components/prettyList";
import {A11yText, EM, TextIcon} from "../common_components/textFormat";

const DownloadPage = () => {  
  return (
    <div>
    <h2>NVDA 다운로드 방법</h2>
      <p>NVDA를 내려받는 방법은 두 가지가 있습니다. NVAccess 영문 홈페이지의 기본 NVDA와
      경북점자도서관에서 사회복지공동모금회의 지원을 받아 만든 보이스위드 버전을 Wellbook 홈페이지에서 받으실 수 있습니다.</p>
      <a className="button-style download nvaccess" href="https://nvaccess.org/download#donateButton">
          <span aria-hidden={true} className="icon-nvda"></span>
        <span className="text-content block">
          <span className="text block small center">
            <span aria-hidden={true} className="logo nvaccess"></span><b>NVAccess</b>에서
          </span>
          <span className="text block large center">
            NVDA 다운로드
          </span>
          <span className="text block smaller center bold">
            Windows 7 이상
          </span>
        </span>
      </a>
      <a className="button-style download wellbook" href="https://nvda.or.kr/voicewith/">
        <span aria-hidden={true} className="icon-nvda"></span>
        <span className="text-content block">
          <span className="text block small center">
            <b>경북점자도서관 wellbook</b>에서
          </span>
          
          <span className="text block large center">
            NVDA 다운로드
          </span>
          <span className="text block smaller center bold">
            보이스위드
          </span>
        </span>
      </a>

      <p>NVAccess는 영문 홈페이지이지이나, 설치 프로그램은 자동으로 언어를 인식하므로
      한국어로 설치를 바로 진행하실 수 있으니 걱정하실 필요가 없습니다.</p>
      <p>
        보이스위드는 카카오톡 지원, 한글과 컴퓨터 NEO 지원, 타자연습과 독서기 등 몇 가지 추가기능과 Selvy TTS 음성 엔진이 포함된 페키지입니다.
      </p>
      <p>
        보이스위드는 무료로 사용할 수 있으나, 타자연습, 독서기, 텔넷 프로그램 등은 경북점자도서관 Wellbook에 가입하여 컴퓨터를 인증해야 사용할 수 있으므로
        사용할 때 참고하시기 바랍니다.
      </p>

      <aside>
        <h3>시스템 사양</h3>
        <p>NVDA는 다음과 같은 컴퓨터 부품, OS 환경부터 사용이 가능합니다.</p>
        <table className="normal-style color-table default sys-req">
          <caption>최소 요구 사양</caption>
          <colgroup>
            <col className="first" />
            <col className="second" />
          </colgroup>
          <tbody>
            <tr className="column-header">
              <th>분류</th>
              <th>사양</th>
            </tr>
            <tr>
              <th>OS</th>
              <td>
                <Ul>
                  <Li>최신버전은 Windows 7과 Windows Server 2008 Service Pack 1 부터 사용 가능</Li>
                  <Li>Windows 7 이하의 Windows는 NVDA 2017.3을 별도로 설치</Li>
                </Ul>
              </td>
            </tr>
            <tr>
              <th>RAM</th>
              <td>
                <Ul>
                  <Li>32bit: 256MB부터</Li>
                  <Li>64bit: 4GB(4096MB)부터</Li>
                </Ul>
              </td>
            </tr>
            <tr>
              <th>저장공간</th>
              <td>
                <Ul>
                  <Li>최소 90MB의 저장공간 필요</Li>
                </Ul>
              </td>
            </tr>
          </tbody>
        </table>
      </aside>

      <section>
        <h3>특정 버전 수동 설치하기</h3>
        <p>
          Windows XP 사용자와 같이 특별 특정 버전이 필요한 사용자 혹은 최신 기능에 대한 테스트가 필요한 개발자는 아래 버튼을 눌러 섹션을 확장하고,
          해당하는 버전을 찾아 다운로드하세요.
        </p>
        <Accordion useSymbol={true}
        ContainerComponentSlot={MinorVersionInfo}
        ButtonSlot={
        <>
          <span className="text normal">
            NVDA 버전별 다운로드
          </span>
        </>
        } />

        <VersionDownloader />
      </section>

      <section>
        <h3>NVDA 설치 가이드</h3>
        <p>NVDA 설치 가이드는 NVAccess 메인 페이지에 접속하여 파일을 다운로드하고,
         설치하는 모든 과정을 설명합니다. 아래 버튼을 눌러 내용을 확장하여 읽을 수 있습니다.</p>
        <Accordion
          useSymbol={true}
          useExitButton={true}
          ExitButtonInnerHTML="설치 가이드 닫기"
          ButtonClassName="fency-button round-normal size-normal nvda-kr-accordion"
          ButtonSlot={
            <>Narrator로 따라하는 NVDA 다운로드 가이드</>
          } ContainerComponentSlot={Narrator_StepForInstall}
        />
      </section>      
    </div>
  )
}

const MinorVersionInfo = () => {
  return (
    <section className="accordion-section">
      <h3>특정 버전 다운로드</h3>
      <p>구 버전의 Windows를 사용하거나, 개발, 새로운 기술의 빠른 경험을
      원하는 분들을 위한 링크를 제공합니다.</p>
      <Ul>
        <Li><a href="https://www.nvaccess.org/download?nvdaVersion=2017.3">Windows XP 사용자를 위한 NVDA 2017.3</a>: Windows XP는 NVDA 2017.3까지만 지원합니다. 누르면 바로 다운로드가 시작됩니다. 불가피하게 구 버전의 Windows를 사용할 수 있으나, 되도록 보안을 위해 Windows 10과 최신 NVDA 사용을 추천드립니다.</Li>
        <Li><a href="https://www.nvaccess.org/files/nvda/snapshots/">알파, 베타버전 다운로드(영문)</a>: NVDA의 최신 업데이트를 먼저 만나볼 수 있는 Beta와 Alpha 채널 버전 목록 페이지입니다. 최신기능을 먼저 만나볼 수 있으나, 개발자용 버전이므로 오류가 많이 발생한다는 것을 명심하고 사용하세요. Alpha와 Beta 목록은 제목 2로 시작하므로, 숫자 2 키를 눌러 탐색할 수 있습니다.</Li>
        <Li><a href="https://www.nvaccess.org/category/news/releases/">NVDA 버전 릴리즈 목록</a>: NVAccess의 버전 릴리즈 포스트 목록입니다. 받고 싶은 버전을 링크에서 선택하고, 포스트에서 "Download NVDA {"{버전명(예: 2020.4)}"}" 링크를 눌러 다운로드를 진행할 수 있습니다. </Li>
      </Ul>
    </section>
  )
}

const Narrator_StepForInstall = () => {
  return (
    <section className="accordion-section">
      <h4>설치 따라하기</h4>
      <p>※ 이 섹션은 NVAccess 다운로드 방법을 기준으로 설명합니다.</p>
      <p>※ <EM>설치 따라하기</EM>는 컴퓨터를 처음 구입하여 아무런 소프트웨어가 없는
      기본 프로그램만으로 설치하는 과정을 다룹니다.</p>
      <p>※ Windows 10 최신 버전과 Windows의 기본 내장 스크린리더인 내래이터(Narrator), 최신의 Microsoft Edge로 적상된 매뉴얼입니다. 
      다른 스크린리더를 사용중이라면, 내레이터를 쓰지 않아도 좋습니다.</p>
      <section>
        <h5>STEP 1: NVAccess NVDA 다운로드 페이지 접속하기</h5>
        <Ul>
          <Li>
          <EM>Control</EM> + <EM><TextIcon iconName="windows" iconAlt="logo" /></EM> + <EM>Enter</EM>
            키를 눌러 내레이터를 시작하세요.
          </Li>
          <Li>
            내레이터가 시작되면 내레이터 시작 창이 나타납니다. 
            내레이터 시작 창은 <EM>Alt</EM> + <EM>F4</EM> 키를 눌러 닫으면 내레이터가 꺼지므로, <EM>Alt</EM> + <EM>아래 화살표</EM>로 창을 내리거나, <EM>Alt</EM> + <EM>Tab</EM>으로 작업을 전환하거나, <EM><TextIcon iconName="windows" iconAlt="logo" /></EM> + <EM>D</EM> 또는 <EM><TextIcon iconName="windows" iconAlt="logo" /></EM> + <EM>M</EM>을 눌러 바탕화면으로 나와야 합니다.
          </Li>
          <Li>
            <EM><TextIcon iconName="windows" iconAlt="logo" /></EM> 키 또는 <EM>Control</EM> + <EM>ESC</EM>를 눌러 시작 메뉴를 열고, <EM>Edge<span className="invisible-a11y">철자: E d g e</span></EM>를 입력합니다. <EM>Microsoft Edge</EM>라고 읽어준다면 <EM>Enter</EM>를 눌러 Edge 브라우저를 실행합니다.
          </Li>
          <Li>
          <EM>Alt</EM> + <EM>D</EM>키를 눌러 주소 편집창에 <EM>nvaccess.org
            <A11yText>철자: N V A C C E S S dot O R G</A11yText>
          </EM>
            를 입력하고 <EM>Enter</EM> 키를 눌러 이동하세요.
          </Li>
          <Li>
            주소를 입력하여 NVAccess에 접속했다면, Download 링크를 읽을 때까지 <EM>알파벳 K</EM>키로 탐색하세요. Download 링크를 읽어주면 <EM>Enter</EM> 키를 눌러 들어가세요.
          </Li>
        </Ul>
      </section>

      <section>
        <h5>STEP 2: NVDA 설치파일 다운로드와 실행</h5>
        <Ul>
          <Li>
            Download 페이지에 접속되었다면 <EM>알파벳 B</EM> 키를 눌러 Download 단추를 찾으세요.
          </Li>
          <Li>
            초점이 Download 단추에 있다면 <EM>Enter</EM> 키를 눌러 다운로드를 시작하세요.  다운로드가 완료되었다는 안내 음성이 들리면 <EM>F6</EM>을 눌러 
            다운로드 표시줄로 이동합니다.
          </Li>
          <Li>
            다운로드 표시줄로 이동하면 <EM>파일이름, 그룹</EM>이 나오며,
            <EM>아래 화살표</EM>키를 누르면 파일 열기 단추에 초점이 이동됩니다. 파일 열기 단추를 <EM>Enter</EM> 키로 눌러주세요.
          </Li>
        </Ul>
        또는
        <Ul>
          <Li>
            Download 페이지에 접속되었다면 <EM>알파벳 B</EM> 키를 눌러 Download 단추를 찾으세요.
          </Li>
          <Li>
            초점이 Download 단추에 있다면 <EM>Enter</EM> 키를 눌러 다운로드를 시작하세요.
          </Li>
          <Li>
          다운로드가 완료되었다는 안내 음성이 들리면 <EM>Control</EM> + <EM>알파벳 J</EM> 키를 눌러 다운로드 탭을 엽니다.</Li>
          <Li><EM>숫자 3</EM> 키(<span class="text bold">F1 아래 있는 숫자 키</span>)를 눌러 오늘 날짜와 동일한 제목 수준 3을 찾으세요.
           (예: 2021년 n월 n일, 제목 수준 3)</Li>
          <Li>
            <EM>Tab</EM> 키를 눌러보세요. 다운로드가 잘 되었다면 가장 첫 번째 항목으로 가장 최근에 다운로드 된 NVDA 파일 단추가 나타납니다.
             다운로드가 잘 되었다면 파일명 단추를 <EM>Enter</EM> 키로 실행해주세요.
          </Li>
        </Ul>
      </section>
      <section>
        <h5>STEP 3: NVDA 설치 및 초기 설정 진행하기</h5>
        <Ul>
          <Li>
            NVDA 설치 인트로 사운드가 재생되며, 인트로 사운드가 끝나면 대화상자가 나타납니다.
            이제부터 내레이터 없이 설치를 진행할 수 있습니다. <EM>Capslock</EM> 또는 <EM>Insert</EM> 키와 <EM>ESC</EM> 키를 눌러
            내레이터를 끝내고 설치를 진행하세요.
          </Li>
          <Li>
            약관 동의 읽기 전용 편집창이 나타나면 <EM>Tab</EM> 키를 눌러 <strong>동의함 (A)</strong> 체크 상자에 초점을 이동하고,  <EM>Space</EM>키를 눌러 체크합니다.
          </Li>
          <Li>
            <EM>Tab</EM> 키를 눌러 <strong>컴퓨터에 NVDA 설치 (I)</strong> 단추를 찾아 <EM>Enter</EM> 키로 누르세요.
          </Li>
          <Li>
            <EM>NVDA 설치 대화상자</EM>가 표시됩니다. 대화상자 내에 있는 대부분의 설정값은 따로 체크 해제하거나 체크할 필요가 없습니다. <EM>Enter</EM> 키를 눌러 설치를 완료하세요.
          </Li>
          <Li>설치 과정을 완료하면 NVDA가 다시 실행되며 NVDA 시작 대화상자가 표시됩니다. NVDA 시작 대화상자에서는 다음과 같은 기초 설정을 진행할 수 있습니다.</Li>
          <Li>
            <strong>키보드 레이아웃 (K) 콤보상자</strong>는 왼쪽에 숫자 패드가 있는 데스크탑용 키보드를 사용하는지, 숫자 패드가 없는 
            노트북 키보드나 87키 키보드를 사용하는지를 설정할 수 있습니다. 이 설정에 따라 NVDA의 단축키가 바뀝니다. 
            기본값은 Desktop이며, 넘버패드가 없는 키보드나 노트북을 사용중이라면 Laptop으로 바꾸는 것을 추천합니다.
          </Li>
          <Li>
            <strong>로그인 후에 NVDA 시작 (A)</strong>는 Windows 시작 프로그램에 NVDA를 등록할 지를 설정합니다.
            기본값으로 체크되어 있습니다. NVDA를 주로 쓰지 않고, 다른 스크린리더를 함꼐 쓴다면 해제하는 것을 추천하나, NVDA를 주로 쓸 것이라면 체크하세요.
          </Li>
          <Li>
            <strong>NVDA 시작 시 이 대화상자 표시</strong>는 말 그대로 NVDA 시작 대화상자를 NVDA가 켜질 때 마다 표시할 것인지를 
            결정합니다. 기본값으로는 체크되어 있으며, NVDA 시작 시 이 대화상자를 보는 것이 싫다면 해제하세요.
          </Li>
        </Ul>
      </section>
    </section>
  )
}

const VersionDownloader = () => {
  const typeCheck = /(2[\d]{3})?\.+(\d{1,2})?\.?([\d]{1,2})?$/
  const allowChar = /^[\d\.]$/
  let inputValue;
  let [isUrlAvailable,setUrlAvailable] = useState(true);
  let vYear;
  let vSubMajor;
  
  const announcement = (text,
    element = document.querySelector('#validation-announcer'))=>{
    let runnable;
    clearTimeout(runnable);
    element.innerHTML = '';
    runnable = setTimeout(()=>{
      element.innerHTML=text;
    },150);
  }

  function checkInput(evt){
    const e = evt.nativeEvent;
    const target = e.target;
    const data = e.data;
    const isAllowedChar = allowChar.test( data );
    const TextStructure = typeCheck.exec( target.value );
    vYear = TextStructure && TextStructure[1] ? TextStructure[1] : null;
    vSubMajor = TextStructure && TextStructure[2] ? TextStructure[2] : null;

    if(data !== null && !isAllowedChar){
      e.target.value = inputValue.substring(0,target.value.length-1);

      announcement(`
      <span class="text color-error">
      입력 오류: 숫자와 마침표만 입력 가능합니다.
      </span>
      `)
    }

    if(
      (/[^.]$/.test(target.value) &&
      vYear && vSubMajor)
    ){
      inputValue = e.target.value;
      setUrlAvailable(true);
      announcement(`
      <span class="text color-success">
      규칙 일치: 버전 규칙과 일치합니다. Enter를 눌러 다운로드를 시도할 수 있습니다.
      </span>`)
    }else{
      setUrlAvailable(false);
    }
  }

  const checkManually = (evt)=>{
    const e = evt.nativeEvent;
    const target = e.target;
    const value = target.value;
    const TextStructure = typeCheck.exec( value );
    vYear = TextStructure && TextStructure[1] ? TextStructure[1] : null;
    vSubMajor = TextStructure && TextStructure[2] ? TextStructure[2] : null;
    if (
      vYear !== null && vSubMajor !== null
    ) {
        inputValue = value;
        setUrlAvailable(true);
        announcement(`
        <span class="text color-success">
        규칙 일치: 버전 규칙과 일치합니다. Enter를 눌러 다운로드를 시도할 수 있습니다.
        </span>`)
      }else{
        setUrlAvailable(false);
        announcement(``);
      }
  }

  const startDownload = (e)=>{
    const eventType = e.nativeEvent.type;
    
    if(
      eventType === 'keydown' && e.key === 'Enter' || eventType === 'click'
    ){
      if(isUrlAvailable){
        inputValue = document.querySelector('#version-downloader').value;
        window.open(`https://www.nvaccess.org/download/nvda/releases/${inputValue}/nvda_${inputValue}.exe`);
        announcement(``);
      }
    }
  }

  return (<div>
    <label htmlFor="version-downloader">버전 다운로더</label>
    <input aria-describedby="desc-version-downloader" placeholder="숫자, 마침표로 버전명 입력"
    type="text" id="version-downloader"
    onInput={checkInput}
    onFocus={checkManually}
    onKeyDown={startDownload}
    onBlur={checkManually} />
    <button className="fency-button" id="submit_version_input" onClick={startDownload}
    disabled={!isUrlAvailable}>다운로드</button>
    <p id="validation-announcer" aria-live="polite"></p>
    <p id="desc-version-downloader">
      "2020.1"와 같이 버전명을 올바르게 입력하고 Enter를 누르면 다운로드가 시작됩니다.
    </p>
  </div>)
}

export {DownloadPage};