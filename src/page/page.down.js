import Accordion from "../common_components/accordionButton";
import {PrettyLi as Li, PrettyUl as Ul} from "../common_components/prettyList";
import {A11yText, EM, TextIcon} from "../common_components/textFormat";

const DownloadPage = () => {  
  return (
    <div>
    <h2>NVDA 다운로드 방법</h2>
      <p>NVDA를 내려받는 방법은 두 가지가 있습니다. NVAccess 영문 홈페이지의 기본 NVDA와
      경북점자도서관에서 사회복지공동모금회의 지원을 받아 만든 보이스위드 버전을 Wellbook 홈페이지에서 받으실 수 있습니다.</p>
      <p>Windows 10이 설치된 PC라면 센스리더와 같은 유료 스크린리더 없어도 <span className="text bold color-emphasis">Control + <span className="text text-icon icon-windows"><span className="invisible-a11y">Logo</span></span> + Enter</span> 키를 눌러 내레이터를 켜고 설치를 진행하실 수 있습니다.</p>
      <Accordion
      useSymbol={true}
      useExitButton={true}
      ExitButtonInnerHTML="설치 가이드 닫기"
      ButtonClassName="fency-button round-normal size-normal nvda-kr-accordion"
      ButtonSlot={
        <>Narrator로 따라하는 NVDA 다운로드 가이드</>
      } ContainerComponentSlot={Narrator_StepForInstall} />
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
        <table className="normal-style sys-req">
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
                Windows 7,
                Windows Server 2008 Service Pack 1부터
              </td>
            </tr>
            <tr>
              <th>RAM</th>
              <td>
                <p>32bit: 256MB부터</p>
                <p>64bit: 4GB(4096MB)부터</p>
              </td>
            </tr>
            <tr>
              <th>저장공간</th>
              <td>
                최소 90MB의 저장공간 필요
              </td>
            </tr>
          </tbody>
        </table>
      </aside>
    </div>
  )
}

const Narrator_StepForInstall = () => {
  return (
    <section className="accordion-section">
      <h3>설치 따라하기</h3>
      <p>※ 이 섹션은 NVAccess 다운로드 방법을 기준으로 설명합니다.</p>
      <p>※ <EM>설치 따라하기</EM>는 컴퓨터를 처음 구입하여 아무런 소프트웨어가 없는
      기본 프로그램만으로 설치하는 과정을 다룹니다.</p>
      <p>※ Windows 10 최신 버전과 Windows의 기본 내장 스크린리더인 내래이터(Narrator), 최신의 Microsoft Edge로 적상된 매뉴얼입니다. 
      다른 스크린리더를 사용중이라면, 내레이터를 쓰지 않아도 좋습니다.</p>
      <section>
        <h4>NVAccess에서 설치하기</h4>
        <p>다음 목록에 따라서 진행하세요.</p>
        <Ul>
          <Li>
          <EM>Control + <span className="text text-icon icon-windows"><span className="invisible-a11y">Logo</span></span> + Enter</EM>
            키를 눌러 내레이터를 시작하세요.
          </Li>
          <Li>
            내레이터가 시작되면 내레이터 시작 창이 나타납니다. 
            내레이터 시작 창은 <EM>Alt + F4</EM>를 눌러 닫으면 내레이터가 꺼지므로, <EM>Alt + 아래 화살표</EM>로 창을 내리거나, <EM>Alt + Tab</EM>으로 작업을 전환하거나, <EM>
              <TextIcon iconName="windows" iconAlt="logo" /> + D
            </EM> 또는 <EM>
              <TextIcon iconName="windows" iconAlt="logo" /> + M
            </EM>을 눌러 바탕화면으로 나와야 합니다.
          </Li>
          <Li>
            <EM>
              <TextIcon iconName="windows" iconAlt="logo" />
            </EM> 키 또는 <EM>Control + ESC</EM>를 눌러 시작 메뉴를 열고, <EM>Edge<span className="invisible-a11y">철자: E d g e</span></EM>를 입력합니다. <EM>Microsoft Edge</EM>라고 읽어준다면 <EM>Enter</EM>를 눌러 Edge 브라우저를 실행합니다.
          </Li>
          <Li>
          <EM>Alt + D</EM>키를 눌러 주소 편집창에 <EM>nvaccess.org
            <A11yText>철자: N V A C C E S S dot O R G</A11yText>
          </EM>
            를 입력하고 <EM>Enter</EM>를 눌러 이동하세요.
            <Ul>
              <Li>
                주소를 입력하여 NVAccess에 접속했다면, Download 링크를 읽을 때까지 <EM>알파벳 K</EM>키로 탐색하세요. Download 링크를 읽어주면 <EM>Enter</EM>키를 눌러 들어가세요.
              </Li>
              <Li>
                Download 페이지에 접속되었다면 <EM>알파벳 B</EM> 키를 눌러 Download 버튼을 찾으세요.
              </Li>
              <Li>
                초점이 Download 버튼에 있다면 <EM>Enter</EM>를 눌러 다운로드를 시작하세요.  다운로드가 완료되었다는 안내 음성이 들리면 <EM>F6</EM>을 눌러 
                다운로드 표시줄로 이동합니다.
              </Li>
              <Li>
                다운로드 표시줄로 이동하면 <EM>파일이름, 그룹</EM>이 나오며,
                <EM>아래 화살표</EM>키를 누르면 파일 열기 버튼에 초점이 이동됩니다. 파일 열기 버튼을 <EM>Enter</EM>로 눌러주세요.
              </Li>
            </Ul>
          </Li>
          <Li>
            NVDA 설치 인트로 사운드가 재생되며, 인트로 사운드가 끝나면 대화상자가 나타납니다.
            이제부터 내레이터 없이 설치를 진행할 수 있습니다. <EM>Capslock</EM> 또는 <EM>Insert</EM>와 <EM>ESC</EM>를 눌러
            내레이터를 끝내고 설치를 진행하세요.
              <Ul>
                <Li>
                  약관 동의 읽기 전용 편집창이 나타나면 <EM>Tab</EM> 키를 눌러 <strong>동의함 (A)</strong> 체크 상자에 초점을 이동하고,
                  <EM>Space</EM>키를 눌러 체크합니다.
                </Li>
                <Li>
                  <EM>Tab</EM> 키를 눌러 <strong>컴퓨터에 NVDA 설치 (I)</strong> 버튼을 찾아 <EM>Enter</EM>로 누르세요.
                </Li>
                <Li>
                  <EM>NVDA 설치 대화상자</EM>가 표시됩니다. 대화상자 내에 있는 대부분의 설정값은 따로 체크 해제하거나 체크할 필요가 없습니다. <EM>Enter</EM>를 눌러 설치를 완료하세요.
                </Li>
                <Li>
                  설치 과정을 완료하면 NVDA가 실행되며 NVDA 시작 대화상자가 표시됩니다.
                </Li>
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
          </Li>
        </Ul>
      </section>
    </section>
  )
}

export {DownloadPage};