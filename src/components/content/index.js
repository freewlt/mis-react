import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Breadcrumb from '../breadcrumb';
//油站基础信息
import StationInfo from '../../pages/manage/basic/stationInfo';
import OilApplication from '../../pages/manage/basic/oilApplication';
import OilInfo from '../../pages/manage/basic/oilInfo';
import TankConfig from '../../pages/manage/basic/tankConfig';
import OilFillerConfig from '../../pages/manage/basic/oilFillerConfig';
//加油员配置
import OperateConfig from '../../pages/manage/operatorConfig/operateConfig';
//支付方式配置
import PayMethod from '../../pages/manage/payMethod/payMethod';
//班次模板管理
import ShiftList from '../../pages/manage/shiftTemplate/index';
//智能设备管理
import SmartDevice from '../../pages/manage/smartDevice/smartDevice';
//油品价格管理
import IntendManually from '../../pages/manage/oilPrice/intendManually';
import OilBaseRecord from '../../pages/manage/oilPrice/oilBaseRecord';
import OilPrice from '../../pages/manage/oilPrice/oilPrice';
//优惠策略
import PreferenPolicies from '../../pages/manage/preferenPolicies/preferenPolicies'
//卸油管理
import UnloadRecord from '../../pages/manage/unloadManage/unloadRecord';
import UnloadHandle from '../../pages/manage/unloadManage/unloadHandle';
//配置信息
import ConfigInfo from '../../pages/manage/config/configInfo';


//查询报表
import OrderQuery from '../../pages/query/order/orderQuery';
//油卡业务
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
          <Route path="/manage/operatorConfig/operateConfig" exact component={OperateConfig}></Route>
          <Route path="/manage/unloadManage/unloadRecord" exact component={UnloadRecord}></Route>
          
          
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
          <Route path="/system/operatorConfig/operateConfig" exact component={OperateConfig}></Route>
          <Route path="/system/payMethod/payMethod" exact component={PayMethod}></Route>
          <Route path="/system/shiftTemplate/shiftList" exact component={ShiftList}></Route>
          <Route path="/system/smartDevice/smartDevice" exact component={SmartDevice}></Route>
          <Route path="/system/oilPrice/intendManually" exact component={IntendManually}></Route>
          <Route path="/system/oilPrice/oilBaseRecord" exact component={OilBaseRecord}></Route>
          <Route path="/system/oilPrice/oilPrice" exact component={OilPrice}></Route>
          <Route path="/system/preferenPolicies/preferenPolicies" exact component={PreferenPolicies}></Route>
          <Route path="/system/unloadManage/unloadRecord" exact component={UnloadRecord}></Route>
          <Route path="/system/unloadManage/unloadHandle" exact component={UnloadHandle}></Route>
          <Route path="/system/config/configInfo" exact component={ConfigInfo}></Route>
          

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