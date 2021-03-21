import React from 'react';
import {NavLink} from 'react-router-dom'
const PageNavLink = (props) =>{
  return (
    <NavLink to={props.to} exact={props.exact}>{props.menuText}</NavLink>
  )
}

export {PageNavLink};