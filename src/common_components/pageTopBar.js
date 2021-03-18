import {GlobalNavigation} from "./PageTopBar.GlobalNavigation";
import {Link} from 'react-router-dom';

const TopBar = ()=>{
  return (
<div className="layout-bar common-tops">
    <header>
    <div class="header-title">
      <Link to="/">
        <h1><span aria-hidden="true" className="icon-nvda"></span>NVDA 한국</h1>
      </Link>
    </div>
    <div class="header-navigation">
      <GlobalNavigation />
    </div>
    </header>
</div>
  )
}

export default TopBar;