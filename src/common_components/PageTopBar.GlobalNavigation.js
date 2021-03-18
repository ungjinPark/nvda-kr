import {PageRouteProps,PageNavLink} from '../page';
const GlobalNavigation = () => {
  return (
    <nav>
      <ul>
        <h2 className="invisible-a11y">전체 메뉴</h2>
         {
           PageRouteProps.map((el,idx)=>{
             return <li key={idx}>
               <PageNavLink to={el.path} exact={el.exact} menuText={el.menuText} />
             </li>
           })
         }
      </ul>
    </nav>
  )
}

export {GlobalNavigation};