import {Redirect, Switch} from 'react-router-dom';
import {PageRouteProps,PageRoute} from '../page'; 

const PageMainRouter = () => {
  return (
  <main>
    <Switch>
      <Redirect to="/home" path="/" exact />
      {
        PageRouteProps.map((el,idx)=>{
          return <PageRoute title={el.title ? el.title : 'title error'} key={idx} path={el.path} component={el.component} exact={el.exact} />
        })
      }
    </Switch>
  </main>
  )
}

export default PageMainRouter;