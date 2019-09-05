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
//图片设置
import PicSet from '../../pages/manage/picSet/picSet';
//配置信息
import ConfigInfo from '../../pages/manage/config/configInfo';

//查询报表
import OrderQuery from '../../pages/query/order/orderQuery';
import ReportClass from '../../pages/query/reportManage/reportClass';
import PhyCardRecharge from '../../pages/query/reportManage/phyCardRecharge';
import PhyCardConsume from '../../pages/query/reportManage/phyCardConsume';
//油卡业务
import OpenCard from '../../pages/oilCard/cardManage/openCard';
import Recharge from '../../pages/oilCard/cardManage/recharge';
import ModifyCard from '../../pages/oilCard/cardManage/modifyCard';
import OilUnitSet from '../../pages/oilCard/cardManage/oilUnitSet';
import CardOperate from '../../pages/oilCard/cardManage/cardOperate';
import PlungAccount from '../../pages/oilCard/cardManage/plungAccount';
import TransferAccount from '../../pages/oilCard/cardManage/transferAccount';
import TradeQuery from '../../pages/oilCard/inquirStatistic/tradeQuery';
import CardDetail from '../../pages/oilCard/inquirStatistic/cardDetail';
import CardEnquiry from '../../pages/oilCard/inquirStatistic/cardEnquiry';
import InvoiceManage from '../../pages/oilCard/inquirStatistic/invoiceManage';
import WhiteList from '../../pages/oilCard/inquirStatistic/whiteList';
import BlackList from '../../pages/oilCard/inquirStatistic/balckList';
import InventoryManage from '../../pages/oilCard/blankCardManage/inventoryManage';
import InOutLog from '../../pages/oilCard/blankCardManage/inOutLog';

import Home from '../../pages/home.js';
//经营状况
import BusCircumstance from '../../pages/busCircumstance';
//收银业务
import Cashier from '../../pages/cashier/index';
import './index.css';


class Content extends Component {
  render() {

    return (
      <div className="content">
        <Breadcrumb/>
          {
            //经营状况
          }
          <Route path="/busCircum" exact component={BusCircumstance}></Route>
          
          {
            //查询报表
          }
          <Route path="/query/order/orderQuery" exact component={OrderQuery}></Route>
          <Route path="/query/reportManage/reportClass" exact component={ReportClass}></Route>
          <Route path="/query/reportManage/phyCardRecharge" exact component={PhyCardRecharge}></Route>
          <Route path="/query/reportManage/phyCardConsume" exact component={PhyCardConsume}></Route>

          {
            //收银业务
          }
          <Route path="/cashier/index" exact component={Cashier}></Route>
          
          {
            //油卡业务
          }
          <Route path="/oilCard/cardManage/openCard" exact component={OpenCard}></Route>
          <Route path="/oilCard/cardManage/recharge" exact component={Recharge}></Route>
          <Route path="/oilCard/cardManage/modifyCard" exact component={ModifyCard}></Route>
          <Route path="/oilCard/cardManage/oilUnitSet" exact component={OilUnitSet}></Route>
          <Route path="/oilCard/cardManage/cardOperate" exact component={CardOperate}></Route>
          <Route path="/oilCard/cardManage/plungAccount" exact component={PlungAccount}></Route>
          <Route path="/oilCard/cardManage/transferAccount" exact component={TransferAccount}></Route>
          <Route path="/oilCard/inquirStatistic/tradeQuery" exact component={TradeQuery}></Route>
          <Route path="/oilCard/inquirStatistic/cardDetail" exact component={CardDetail}></Route>
          <Route path="/oilCard/inquirStatistic/cardEnquiry" exact component={CardEnquiry}></Route>
          <Route path="/oilCard/inquirStatistic/invoiceManage" exact component={InvoiceManage}></Route>
          <Route path="/oilCard/inquirStatistic/whiteList" exact component={WhiteList}></Route>
          <Route path="/oilCard/inquirStatistic/balckList" exact component={BlackList}></Route>
          <Route path="/oilCard/blankCardManage/inventoryManage" exact component={InventoryManage}></Route>
          <Route path="/oilCard/blankCardManage/inOutLog" exact component={InOutLog}></Route>
          
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
          <Route path="/system/picSet/picSet" exact component={PicSet}></Route>
          <Route path="/system/config/configInfo" exact component={ConfigInfo}></Route>
          

          <Route component={Home}></Route>
       
      </div>
    );
  }
}

export default Content

// const mapStateToProps =(state) => {
//   return {

//   }
// }
// const mapDispathToProps = (dispatch) =>{
//   return {

//   }
// }
// export default connect(mapStateToProps,mapDispathToProps)(content);