import React, { Component } from 'react';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login/Login';
import Main from './pages/main/Main';
import Res from './pages/res/Res';
import Forget from './pages/forget/Forget';
import Map from './pages/Map';
import Search from './pages/Search';
import Citylist from './pages/Citylist'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Redirect from='/' exact to='/home' />
          <Route path='/home' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/res' component={Res} />
          <Route path='/forget' component={Forget} />
          <Route path='/map' component={Map} />
          <Route path='/search' component={Search} />
          <Route path='/citylist' component={Citylist} />
        </Switch>
      </HashRouter>
    )
  }
}
