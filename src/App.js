import './res/styles/app.layout.scss';
import Landmarks from "./common_components";
function App() {
  return (
    <div className="page-wrapper">
      <Landmarks.TopBar />
      <div className="layout-middle-wrapper">
        <Landmarks.PageMainRouter />
      </div>
      <Landmarks.BottomBar />
    </div>
  );
}

export default App;
