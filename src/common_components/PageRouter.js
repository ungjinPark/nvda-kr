import PropTypes from "prop-types";
import {PageRoute} from '../page'; 
const PageRouter = ({PageList}) => { 
  return (
    <>
      {
        PageList.map((el,idx)=>{
          return <PageRoute key={idx}
          title={el.title}
          path={el.path}
          exact={el.route_exact}
          strict={el.strict ? el.strict : false}
          component={el.component}
        />
        })
      }
    </>
  )
}

PageRouter.defaultProps={
  PageList:[]
}
PageRouter.propTypes = {
  PageList:PropTypes.array
}

export default PageRouter;