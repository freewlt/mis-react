import React from 'react';
import  Header from './components/header';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Home from '../src/pages/home';
import Manage from '../src/pages/manage';
import Cashier from '../src/pages/Cashier';
import OilCard from '../src/pages/oilCard';
import Query from '../src/pages/query';
import System from '../src/pages/system';


class App extends React.Component {
  
    render() {
        return (
          <Provider store={store}>
            <BrowserRouter>
              <Header/>
              <Switch>
                <Route path="/manage" component={Manage}></Route>
                <Route path="/cashier" component={Cashier}></Route>
                <Route path="/oilCard" component={OilCard}></Route>
                <Route path="/query" component={Query}></Route>
                <Route path="/system" component={System}></Route>
                <Route component={Home}></Route>
              </Switch>
            </BrowserRouter>
         </Provider>
        );
    }
}


export default App;