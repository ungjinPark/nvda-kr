import Home,{SubPage as HomeSub} from "./page.home";
import About from "./page.about";
import AboutForum from "./page.forum";
import {DownloadPage as Download} from "./page.down";
import PageNotFound from './page.NotFound';

const MainRoute = () => {
  return [
    {
      component:Home,
      to:"/home",
      path:"home",
      title:'NVDA 한국 - 홈',
      menuText:"홈"
    },

    {
      component:About,
      to:"/about",
      path:"about",
      title:"NVDA 한국 - NVDA 소개",
      menuText:"NVDA 소개"
    },
    {
      component:Download,
      to:"/download",
      path:"download",
      title:"NVDA 한국 - 다운로드",
      menuText:"다운로드"
    },

    {
      component:AboutForum,
      to:"/forum",
      path:"forum",
      title:'NVDA 한국 - 홈 > 포럼 소개',
      menuText:"포럼"
    },
    {
      component:PageNotFound,
      to:"/NotFound_404",
      path:"NotFound_404",
      title:'NVDA 한국 - 홈 > 포럼 소개',
    }
  ]
}


const HomeRoute = (url) =>{
  return [
  {
    component:HomeSub.AboutPage,
    to:`${url}/aboutPage`,
    path:'aboutPage',
    menuText:'페이지 소개',
    title:'NVDA 한국 - 홈 > 페이지 소개',
  },
  {
    component:HomeSub.AboutSR,
    to:`${url}/aboutSR`,
    path:'aboutSR',
    menuText:'스크린리더',
    title:'NVDA 한국 - 홈 > 스크린리더',
  }
  ]
}

export {MainRoute,HomeRoute}