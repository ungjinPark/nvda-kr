import './res/styles/app.layout.scss';
import Landmarks from "./common_components";
function App() {
  return (
    <div className="page-wrapper">
      <Landmarks.TopBar />
      <Landmarks.BottomBar />
    </div>
  );
}

export default App;
