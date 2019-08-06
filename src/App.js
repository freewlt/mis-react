import React from 'react';
import  Header from './components/header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../src/pages/home';
import Manage from '../src/pages/manage';

class App extends React.Component {
    render() {
        return (
          <BrowserRouter>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/manage" exact component={Manage}></Route>
              
          </BrowserRouter>
        );
    }
}
export default App;