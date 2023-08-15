import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import PublicRoute from './utils/PublicRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/marriage-invitation">Marriage</NavLink>
            <NavLink activeClassName="active" to="/reception-invitation">Reception</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/marriage-invitation" component={Login} />
              <PublicRoute path="/reception-invitation" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;