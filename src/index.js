import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';


import UserRegister from './components/user_register';
import UsersList from './components/users_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider>
        <Switch>
          <Route path="/reg" component={UserRegister} />
          <Route path="/" component={UsersList} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

