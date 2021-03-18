import React from 'react';
import { NavLink, BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';
const Home = (props) => {
  let {path, url} = useRouteMatch();
  return (
    <div className="page-intro">
    <Router>
      <nav>
        <h2 className="invisible-a11y">하위 메뉴</h2>
        <HomeSubPageMenu url={url} />
      </nav>
      <article>
        <HomeSubPages path={path} />
      </article>
    </Router>
    </div>
  )
}
const HomeSubPageMenu = ({url}) =>{
  return(
    <ul>
      <li><NavLink to={`${url}/aboutNVDAKorea`}>페이지 소개</NavLink></li>
      <li><NavLink to={`${url}/aboutSR`}>스크린리더</NavLink></li>
    </ul>
  )
}

const HomeSubPages = ({path}) =>{
  return (
    <Switch>
      <Redirect to={`${path}/aboutNVDAKorea`} path="/home" exact/>
      <Route exact path={`${path}/aboutNVDAKorea`}>
        <h2>NVDA 한국 페이지는?</h2>
        <p>
          NVDA 한국 페이지는 <strong>
          대한민국 사람, 한국어를 사용하는 누구나 쉽게 NVDA 스크린리더에 접근하고, 알아가는 곳
          </strong>입니다.
        </p>
        <p>
          또한, NVDA의 보급 뿐만 아니라, 스크린리더를 모르는 대중에 <strong>소리로 듣고 컴퓨터를 사용하는 새로운 세상, 경험</strong>을
          선사하는 것을 목표로 합니다.
        </p>
      </Route>
      <Route exact path={`${path}/aboutSR`}>
        <h2>스크린리더란?</h2>
        <p>
          스크린리더(Screen Reader)는 한자 표현으로 화면 낭독기라고도 표현하며,
          화면의 컨텐츠를 읽는 데에 어려움을 겪거나, 읽지 못하는 사람이 소리를 통해
          컴퓨터를 사용할 수 있도록 소리와 음성으로 듣고, 주로 키보드를 사용하여 컴퓨터를 사용하는 소프트웨어입니다.
        </p>
        <h3>스크린리더의 종류</h3>
        <p>
          스크린리더는 매우 다양한 운영체제에서 지원하거나, 개발되어 있습니다.
          우리가 가장 많이 사용하는 Windows에는 Windows의 내장 스크린리더, 내레이터(Narrator)가 있으며, 세계적으로 유명한 JAWS와
          NVDA가 있습니다. 국내의 스크린리더로 Sense Reader가 가장 많이 알려져 있습니다.
        </p>
        <p>또한 Talkback, VoiceOver, ChromeVox, 모바일을 포함한 다양한 유닉스, 리눅스, 브라우저에서
        스크린리더를 지원하여, 화면을 보거나 읽을 수 없는 사용자가 다양한 기기를 사용할 수 있습니다.</p>
      </Route>
    </Switch>
  )
}
export default Home;