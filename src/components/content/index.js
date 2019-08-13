import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Breadcrumb from '../breadcrumb';

import StationInfo from '../../pages/manage/stationInfo';
import Management from '../../pages/manage/management';
import OilApplication from '../../pages/manage/oilApplication';
import Home from '../../pages/home.js';


import Casheng from '../../pages/cashier/casheng';
import './index.css';


class content extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render() {

    return (
      <div className="content">
        <Breadcrumb/>
        <Route path="/manage/stationInfo" exact component={StationInfo}></Route>
        <Route path="/manage/oilApplication" exact component={OilApplication}></Route>
        <Route path="/manage/management" exact component={Management}></Route>

        <Route path="/cashier/casheng" exact component={Casheng}></Route>
        <Route component={Home}></Route>
       
      </div>
    );
  }
}

export default content

// const mapStateToProps =(state) => {
//   return {

//   }
// }
// const mapDispathToProps = (dispatch) =>{
//   return {

//   }
// }
// export default connect(mapStateToProps,mapDispathToProps)(content);