import './res/styles/app.layout.scss';
import Landmarks from "./common_components";
import {MainRoute} from './page/info.PageRoute'
import {Redirect,Route, Switch} from 'react-router';
import Pager from './page/PageRouter';
function App() {
  return (
    <div className="page-wrapper">
      <Landmarks.TopBar />
      <div className="layout-middle-wrapper">
      <main>
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
      </div>
      <Landmarks.BottomBar />
    </div>
  );
}

export default App;
