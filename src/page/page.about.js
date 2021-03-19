import React from 'react';
const About = () => {
  return (
    <div className="main-body about-nvda">
      <article>
        <h2>NVDA는?</h2>
        <p>NVDA는 Non-Visual Desktop Access의 약자로, 호주의 비영리 단체인 NVAccess에서 만든 Python 컴퓨터 언어 기반의 오픈소스(OpenSource) 무료 스크린리더입니다.</p>
        <p>NVDA는 전 세계적으로 널리 사용하는 무료 스크린리더로, Windows가 있는 어디서나 쉽고 간편하게 설치하여 사용할 수 있습니다.</p>
        <section>
          <h3>NVDA의 기능</h3>
          <aside className="type info">
            <h4>안내</h4>
            <p>본 기능 소개는 NVAccess에서 제공하는 기능 소개에서 번역된 글입니다.</p>
          </aside>
          <p>NVDA는 시력이 나쁘거나, 눈이 전혀 보이지 않는 사용자가 Windows 운영체제와 서드파티 응용프로그램에 접근하고, 상호작용할 수 있도록 합니다.</p>
          <p>주요 특징은 다음과 같습니다.</p>
          <ul>
            <li>
              Google Chrome이나 Mozila Firefox같은 웹브라우저, 이메일 클라이언트, 인터넷 채팅 소프트웨어, 미디어 플레이어, Microsoft의 Word나 Excel같은 오피스 프로그램을 포함한 
              인기있는 응용프로그램을 지원합니다.
            </li>
            <li>
              내장된 음성 합성 엔진이 50개 이상의 언어를 지원하며, 다양한 서드파티 음성을 지원합니다.
            </li>
            <li>
              글자 서식이 있는 문서에서 폰트 이름, 글자 크기, 기타 스타일, 철자 오류 등, 글자의 서식을 안내합니다.
            </li>
            <li>마우스 커서 아래의 텍스트를 자동으로 읽어주며, 마우스 위치에 따른 다양한 방식으로 들을 수 있습니다.</li>
            <li>점자 키보드가 있는 점자 디스플레이를 통한 점자 입력을 포함하는 많은 점자 디스플레이를 지원합니다.</li>
            <li>설치할 필요 없이 USB 플래시 드라이브 또는 기타 휴대용 미디어에서 완전히 실행할 수 있습니다.</li>
            <li>음성 안내되는 설치 프로그램으료 쉽게 접근할 수 있습니다.</li>
            <li>50개국 이상의 언어로 번역되었습니다.</li>
            <li>32비트, 64비트 환경의 최신 Windows 운영체제를 모두 지원합니다.</li>
            <li>잠금 화면이나 Windows 로그온 화면에서도 동작합니다.</li>
            <li>터치 스크린의 제스처를 통해 컨트롤 요소와 텍스트를 읽고, 사용할 수 있습니다.</li>
            <li>선택적인 전화 지원 및 포괄적인 교육 자료를 매우 저렴한 비용으로 이용할 수 있습니다.</li>
            <li>
              <div>
                열정적인 사용자 커뮤니티를 활용하여 도움을 받을 수 있습니다.
                <a href="/forum" className="block">
                  <span style={
                    {
                      verticalAlign:'middle'
                    }
                  } className="icon-nvda"></span>
                  한국 사용자 커뮤니티 알아보기
                </a>
              </div>
              
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default About;