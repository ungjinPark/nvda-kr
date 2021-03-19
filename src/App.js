import './res/styles/app.layout.scss';
import Landmarks from "./common_components";
import PageRouter from './common_components/PageRouter';
import {MainRoute} from './page/info.PageRoute'
import { Redirect, Switch } from 'react-router';

function App() {
  return (
    <div className="page-wrapper">
      <Landmarks.TopBar />
      <div className="layout-middle-wrapper">
      <main>
      <Switch>
        <Redirect path="/" to="/home" exact />
        <Redirect path="/home" to="/home/aboutPage" exact />
          <PageRouter PageList={MainRoute()} />
      </Switch>
      </main>
      </div>
      <Landmarks.BottomBar />
    </div>
  );
}

export default App;
