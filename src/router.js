import React from 'react';
import  Header from './components/header';
import { connect } from 'react-redux';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

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
    constructor(props) {
        super(props);
    };

    componentDidMount () {
        this.loadLocales();
    }

    loadLocales() {
        console.log(this.props.currentLocale)
        intl.init({
            currentLocale:this.props.currentLocale,
            locales,
        })
    }

    render() {
        
        return (
            <IntlProvider locale=''>
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
            </IntlProvider>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
      currentLocale:state.currentLocale,
    }
  };
  const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)