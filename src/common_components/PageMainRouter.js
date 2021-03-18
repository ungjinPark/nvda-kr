import {
  BrowserRouter as PageRouter, Switch, Route
} from 'react-router-dom';

const PageMainRouter = () => {
  <PageRouter>
    <Switch>
      <Route exact path="/" />
    </Switch>
  </PageRouter>
}

export default PageMainRouter;