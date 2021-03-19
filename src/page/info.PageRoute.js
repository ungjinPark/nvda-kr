import Home,{SubPage as HomeSub} from "./page.home";
import About from "./page.about";
import AboutForum from "./page.forum";
import {DownloadPage as Download} from "./page.down";

const MainRoute = () => {
  return [
    {
      component:Home,
      to:"/home",
      path:"/home",
      route_exact:false,
      link_exact:false,
      title:'NVDA 한국 - 홈 > 페이지 소개',
      menuText:"홈"
    },

    {
      component:About,
      to:"/about",
      path:"/about",
      route_exact:false,
      link_exact:false,
      title:"NVDA 한국 - NVDA 소개",
      menuText:"NVDA 소개"
    },
    {
      component:Download,
      to:"/download",
      path:"/download",
      route_exact:false,
      link_exact:false,
      title:"NVDA 한국 - 다운로드",
      menuText:"다운로드"
    },

    {
      component:AboutForum,
      to:"/forum",
      path:"/forum",
      route_exact:false,
      link_exact:false,
      title:'NVDA 한국 - 홈 > 포럼 소개',
      menuText:"포럼"
    },
  ]
}


const HomeRoute = (url,path) =>{
  return [
  {
    component:HomeSub.AboutPage,
    to:`${url}/aboutPage`,
    path:`${path}/aboutPage`,
    menuText:'페이지 소개',
    title:'NVDA 한국 - 홈 > 페이지 소개',
    link_exact:false,
    route_exact:false,
  },
  {
    component:HomeSub.AboutSR,
    to:`${url}/aboutSR`,
    path:`${path}/aboutSR`,
    menuText:'스크린리더',
    title:'NVDA 한국 - 홈 > 스크린리더',
    link_exact:false,
    route_exact:false,
  }
  ]
}

export {MainRoute,HomeRoute}