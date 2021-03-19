import React, {useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom'

const RouteModule = (props) =>{
    useEffect(()=>{
      let timeout;
      const PageAnnouncer = document.body.querySelector('#PageAnnouncer');
      PageAnnouncer.innerHTML = `페이지 로드됨 : ${props.title}`;
      timeout = setTimeout(()=>{
        clearTimeout(timeout);
        PageAnnouncer.innerHTML = '';
      },100)
      document.title = props.title;
    },[props])
    return (
      <props.component />
    )
}

const PageRoute = (props) =>{
  return (
    <Route strict={props.strict} path={props.path} exact={props.exact} render={ 
    ()=>{
      return (
      <RouteModule {...props} />
    )
    }} />
  )
}

const PageNavLink = (props) =>{
  return (
    <NavLink to={props.to} exact={props.exact}>{props.menuText}</NavLink>
  )
}

export {PageNavLink,PageRoute};