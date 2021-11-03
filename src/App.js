import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './components/Movies';
import HeaderNav from './components/common/HeaderNav';
import NotFound from './components/common/NotFound';
import FormRef from './components/common/FormRef';
import FormBasic from './components/common/FormBasic';
import FormJoi from './components/common/FormJoi';
import FormMovie from './components/common/FormMovie';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <>
        <HeaderNav />
        <main className='App container'>
          <Switch>
            <Route path='/movies/:id' component={FormMovie} />
            <Route path='/movies' component={Movies} />
            <Route path='/form-ref' component={FormRef} />
            <Route path='/form-basic' component={FormBasic} />
            <Route path='/form-joi' component={FormJoi} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' to='/movies' exact />

            <Redirect to='/not-found' />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
