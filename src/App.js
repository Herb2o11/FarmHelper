import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";

import Header from './fragments/Header';
import Login from './fragments/Login';
import Home from './components/Home';
import About from './components/About';
import AnimalMain from './components/AnimalMain';
import * as account from  './api/account';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/about" component={About} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/calc/:animal/:id?" component={AnimalMain} />
        </Switch>
      </Router>
  );
}

const WrapperComponentsRender = (props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div  id="body_content">
        <props.component params={useParams()} location={props.location} />
      </div>
      <footer id="footer">
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

function PublicRoute({ children, component, ...rest }) {
  return (
    <Route {...rest}>
      <WrapperComponentsRender component={component} {...rest} />
    </Route>
  );
}

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({ children, component, ...rest }) {
  if (account.isAuthenticated()) {
    return (
      <Route {...rest}>
        <WrapperComponentsRender component={component}  {...rest} />
      </Route>
    );
  } else {
    return (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

export default App;
