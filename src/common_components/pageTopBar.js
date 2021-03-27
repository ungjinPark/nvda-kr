import {Navigation} from "./Navigation";
import {Link} from 'react-router-dom';
import { MainRoute } from "../page/info.PageRoute";

const TopBar = ()=>{
  return (
<div className="layout-bar common-tops">
    <header>
    <div className="header-title">
      <h1>
        <Link to="/" id="header_start">
          <span aria-hidden="true" className="icon-nvda"></span>NVDA 한국
        </Link>
      </h1>
    </div>
    <div className="header-navigation">
      <nav>
        <h2 className="invisible-a11y">전체 메뉴</h2>
        <Navigation PageList={MainRoute()} />
      </nav>
    </div>
    </header>
</div>
  )
}

export default TopBar;