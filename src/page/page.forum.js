const AboutForum=()=>{
    return  (
        <div className="page-main forum">
            
            <article className="forum-intro">
                <div className="text center wide-margin">
                    <h2>NVDA 한국 사용자 포럼 소개</h2>
                    <p className="text middle">NVDA 한국 사용자 포럼을 소개합니다.</p>
                    <p>
                    NVDA는 여러 번역자의 손을 거처 한국인이 사용하기에 무리가 없도록
                    한글로 번역되었습니다.</p>
                    <p>
                    NVDA는 여전히 널리 알려질 필요가 있으나, NVDA의 커뮤니티는 영어를 사용하므로
                    언어라는 벽이 우리를 가로막습니다.
                    </p>
                    <p>
                    한국 사람과 NVDA 사이의 벽을 허물어 줄 열정적인 NVDA 한국 사용자 포럼을 소개합니다.
                    </p>
                    <section>
                        <h3>Facebook 포럼</h3>
                        <p>NVDA 한국 사용자 포럼은 다양한 사람이 쉽게 접근할 수 있도록
                        대중적으로 공개된 Facebook 그룹 플랫폼을 사용합니다.</p>
                        
                        <a href="https://www.facebook.com/groups/nvdakr/"
                        className="button-style facebook">
                            <span className="icon-facebook"></span>
                            Facebook
                            <span className="text block smaller">
                            NVDA 한국 사용자 포럼 바로가기
                            </span>
                        </a>
                        <p>포럼은 다양한 사람이 함께하는 공간이므로 반드시 <a href="https://www.facebook.com/groups/nvdakr/about" target="_blank">Facebook 포럼 정보</a>의 규칙 섹션을 준수하시기 바랍니다.</p>
                    </section>
                </div>
            </article>
        </div>
    )
}
export default AboutForum;