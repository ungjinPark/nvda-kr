import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {useParams} from "react-router";
import PageNotFound from "./page.NotFound";
const Pager = ({
    PageList
})=>{
    const params = useParams();
    const pathName = params.path;
    const Error404 = {
        component:PageNotFound,
        title:"NVDA 한국 - 페이지 찾을 수 없음",
    }

    let current = Error404;
    for( const page of PageList ){
        if(page.path === pathName){
            current = page;
            break;
        }
    }

    useEffect(()=>{
        let timeout;
        const PageAnnouncer = document.body.querySelector('#PageAnnouncer');
        PageAnnouncer.innerHTML = `페이지 로드됨 : ${current.title}`;
        timeout = setTimeout(()=>{
          clearTimeout(timeout);
          PageAnnouncer.innerHTML = '';
        },100)
      },[current])
    
    return ( 
        <>
        <Helmet title={current.title} />
        <current.component />
        </>
    )
}
export default Pager;