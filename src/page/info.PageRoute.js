import Home from "./page.home";
import About from "./page.about";
const PageRouteProps = [
  {
    component:Home,
    path:"/home",
    exact:false,
    title:'NVDA 한국 - 홈',
    menuText:"홈"
  },
  {
    component:About,
    path:"/about",
    exact:false,
    title:"NVDA 한국 - NVDA 소개",
    menuText:"NVDA 소개"
  }
]

export default PageRouteProps;