import './res/styles/app.layout.scss';
import Landmarks from "./common_components";
import {MainRoute} from './page/info.PageRoute'
import {Redirect,Route, Switch} from 'react-router';
import Pager from './page/PageRouter';
import { RegionShuttleLink, SkipNavigation, WarningOldBrowser } from './common_components/RegionShuttle';
import { A11yText } from './common_components/textFormat';
import IEWarningArea from './common_components/IEWarning';
function App() {
  return (
    <div className="page-wrapper">
      <SkipNavigation />
      <Landmarks.TopBar />
      <div className="layout-middle-wrapper">
      <main tabIndex="-1" id="main_content">
      <IEWarningArea />
        {/* <Redirect from="/" exact to="/home/aboutPage" />
        <Redirect from="/home" exact to="/home/aboutPage" /> */}
        <Switch>
          <Redirect path="/" exact to="/home" />
          <Redirect path="/home" exact to="/home/aboutPage" />
          <Route path="/:path">
            <Pager PageList={MainRoute()} />
          </Route>
        </Switch>
      </main>
      <div className="floating-area fixed right bottom margin">
        <RegionShuttleLink LinkId="goTo-pageTop" DestinationHash="#skipTo-main">
          <span aria-hidden={true} className="text normal">
            ▲
          </span>
          <span aria-hidden={true} className="text smaller">
            TOP
          </span>
          <A11yText>
            페이지 맨 위로 이동
          </A11yText>
        </RegionShuttleLink>
      </div>
      </div>
      <Landmarks.BottomBar />
    </div>
  );
}

export default App;
