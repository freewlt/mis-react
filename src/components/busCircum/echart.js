import React, { Component } from 'react';
import PineEchart from './pieEchart';
import PineEchart2 from './pieEchart';
import PineEchart3 from './pieEchart';

const list ={
  id:'pieFir',
  text: '油品占比2',
  xdata:[
    {value:335, name:'92#'},
    {value:310, name:'95#'},
  ],
  color:['#ef2a82','#74a0ff'],
  type:['92#','95#']
}
const payMethodList ={
  id:'pieSec',
  text: '支付方式',
  xdata:[
    {value:335, name:'现金'},
    {value:310, name:'银联卡'},
    {value:234, name:'微信'},
    {value:135, name:'电子卡'},
    {value:1548, name:'加油卡'},
    {value:1548, name:'支付宝'}
  ],
  color:['#ef2a82','#74a0ff','#1663ff','#109618','#990099','#0099c6'],
  type:['现金','银联卡','微信','电子卡','加油卡','支付宝']
}
const menmberList ={
  id:'pieThi',
  text: '会员占比',
  xdata:[
    {value:234, name:'非会员'},
    {value:135, name:'个人卡'}
  ],
  color:['#ef2a82','#74a0ff'],
  type:['非会员','个人卡']
}



class Echart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


render() {
    return (
        <div className="echarts">
          <PineEchart list ={list}/>
          <PineEchart2 list ={payMethodList}/>
          <PineEchart3 list ={menmberList}/>
        </div>
    );
}
}

export default Echart;