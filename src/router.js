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

import {IntlProvider} from 'react-intl';
import intl from 'react-intl-universal';
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
const locales = {
    "en-US": require('./locale/en_US.js'),
    "zh-CN": require('./locale/zh_CN.js'),
};

class App extends React.Component {
    state = {initDone: false}
    componentDidMount() {
        this.loadLocales();
    }

    loadLocales() {
        intl.init({
            currentLocale: 'zh-CN',
            locales,
        })
            .then(() => {
                this.setState({initDone: true});
            });
    }

    render() {
        return (
          <IntlProvider>
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
         </IntlProvider>
        );
    }
}


export default App;