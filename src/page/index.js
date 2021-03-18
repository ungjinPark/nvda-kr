import React, {useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom'
import PageRouteProps from "./info.PageRoute";

const PageRoute = (props) =>{
  useEffect(()=>{
    document.title = props.title;
    let timeout;
    const PageAnnouncer = document.body.querySelector('#PageAnnouncer');
    timeout = setTimeout(()=>{
      clearTimeout(timeout);
      PageAnnouncer.innerHTML = `페이지 로드됨 - ${document.title}`;
    },100);
    timeout = setTimeout(()=>{
      clearTimeout(timeout);
      PageAnnouncer.innerHTML = '';
    })
  },[props])
  return (
    <Route path={props.path} exact={props.exact} component={props.component} />
  )
}

const PageNavLink = (props) =>{
  return (
    <NavLink to={props.to} exact={props.exact}>{props.menuText}</NavLink>
  )
}

export {PageRouteProps,PageNavLink,PageRoute};