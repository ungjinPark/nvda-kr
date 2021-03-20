const DownloadPage = () => {
  
  return (
    <div>
    <h2>NVDA 다운로드</h2>
      <p>NVDA를 내려받는 방법은 두 가지가 있습니다. NVAccess 영문 홈페이지의 기본 NVDA와
      경북점자도서관에서 사회복지공동모금회의 지원을 받아 만든 보이스위드 버전을 Wellbook 홈페이지에서 받으실 수 있습니다.</p>
      <a className="button-style download nvaccess" href="https://nvaccess.org/download#donateButton">
          <span className="icon-nvda"></span>
        <span className="text-content block">
          <span className="text block small center">
            <span className="logo nvaccess"></span><b>NVAccess</b>에서
          </span>
          <span className="text block large center">
            NVDA 다운로드
          </span>
          <span className="text block smaller center bold">
            Windows 7 이상
          </span>
        </span>
      </a>
      <a className="button-style download wellbook" href="https://nvaccess.org/download#donateButton">
        <span className="icon-nvda"></span>
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

export {DownloadPage};