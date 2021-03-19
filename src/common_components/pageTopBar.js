import {Navigation} from "./Navigation";
import {Link} from 'react-router-dom';
import { MainRoute } from "../page/info.PageRoute";

const TopBar = ()=>{
  return (
<div className="layout-bar common-tops">
    <header>
    <div className="header-title">
      <Link to="/">
        <h1><span aria-hidden="true" className="icon-nvda"></span>NVDA 한국</h1>
      </Link>
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