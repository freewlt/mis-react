import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Breadcrumb from '../breadcrumb';

import StationInfo from '../../pages/manage/basic/stationInfo';
import OilApplication from '../../pages/manage/basic/oilApplication';
import OilInfo from '../../pages/manage/basic/oilInfo';
import TankConfig from '../../pages/manage/basic/tankConfig';
import OilFillerConfig from '../../pages/manage/basic/oilFillerConfig';
import ConfigInfo from '../../pages/manage/config/configInfo';
import PayMethod from '../../pages/manage/payMethod/payMethod'

import ShiftList from '../../pages/manage/shiftTemplate/index';

import OrderQuery from '../../pages/query/order/orderQuery';
import CardManage from '../../pages/oilCard/cardManage/cardManage';



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
          {
            //经营状况
          }
          <Route path="/manage/basic/stationInfo" exact component={StationInfo}></Route>
          <Route path="/manage/basic/oilApplication" exact component={OilApplication}></Route>
          <Route path="/manage/basic/oilInfo" exact component={OilInfo}></Route>
          <Route path="/manage/basic/tankConfig" exact component={TankConfig}></Route>
          <Route path="/manage/basic/oilFillerConfig" exact component={OilFillerConfig}></Route>
          <Route path="/manage/config/configInfo" exact component={ConfigInfo}></Route>
          <Route path="/manage/payMethod/payMethod" exact component={PayMethod}></Route>
          

          {
            //收银业务
          }
          <Route path="/manage/shiftTemplate/shiftList" exact component={ShiftList}></Route>
          
          {
            //查询报表
          }
          <Route path="/query/order/orderQuery" exact component={OrderQuery}></Route>

          <Route path="/cashier/casheng" exact component={Casheng}></Route>

          {
            //油卡业务
          }
          <Route path="/oilCard/cardManage/cardManage" exact component={CardManage}></Route>
          
          {
            //系统设置
          }
          <Route path="/system/basic/stationInfo" exact component={StationInfo}></Route>
          <Route path="/system/basic/oilApplication" exact component={OilApplication}></Route>
          <Route path="/system/basic/oilInfo" exact component={OilInfo}></Route>
          <Route path="/system/basic/tankConfig" exact component={TankConfig}></Route>
          <Route path="/system/basic/oilFillerConfig" exact component={OilFillerConfig}></Route>
          <Route path="/system/config/configInfo" exact component={ConfigInfo}></Route>
          <Route path="/system/payMethod/payMethod" exact component={PayMethod}></Route>

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