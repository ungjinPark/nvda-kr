import {PageNavLink} from '../page';
import PropTypes from "prop-types";

const Navigation = ({PageList}) => {
  return (
    <ul>
        {
          PageList.map((el,idx)=>{
            if(el.menuText !== undefined){
              return <li key={idx}>
                <PageNavLink to={el.to} exact={el.link_exact} menuText={el.menuText} />
              </li>
            }else{
              return;
            }
          })
        }
    </ul>
  )
}

Navigation.defaultProps = {
  PageList:[]
}
Navigation.propTypes = {
  PageList:PropTypes.array
}

export {Navigation};