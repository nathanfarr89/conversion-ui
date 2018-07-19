import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TempConv from './components/tempconv'
import WeightConv from './components/weightconv'
import MeasureConv from './components/measureconv'
import FeetMetersConv from './components/feetmetersconv'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/temp" component={TempConv} />
          <Route path="/weight" component={WeightConv} />
          <Route path="/measure" component={MeasureConv} />
          <Route path="/feetmeters" component={FeetMetersConv} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
