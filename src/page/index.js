import React, {useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom'
const PageNavLink = (props) =>{
  return (
    <NavLink to={props.to} exact={props.exact}>{props.menuText}</NavLink>
  )
}

export {PageNavLink};