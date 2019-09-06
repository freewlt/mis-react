import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Test from './one.js';
import Test2 from './one.js';
import Test3 from './one.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const list ={
  id:'pie1',
  text: '油品占比2',
  xdata:[
    {value:335, name:'92#'},
    {value:310, name:'95#'},
  ],
  color:['#ef2a82','#74a0ff'],
  type:['92#','95#']
}
const payMethodList ={
  id:'pie2',
  text: '支付方式',
  xdata:[
    {value:335, name:'现金'},
    {value:310, name:'银联卡'},
    {value:234, name:'微信'},
    {value:135, name:'电子卡'},
    {value:1548, name:'加油卡'},
    {value:1548, name:'支付宝'}
  ],
  color:['#ef2a82','#74a0ff','#1663ff','#109618','#74a0ff','#1663ff'],
  type:['现金','银联卡','微信','电子卡','加油卡','支付宝']
}
const menmberList ={
  id:'pie3',
  text: '会员占比',
  xdata:[
    {value:234, name:'非会员'},
    {value:135, name:'个人卡'}
  ],
  color:['#ef2a82','#74a0ff'],
  type:['非会员','个人卡']
}
const tankList ={
  id:'pie4',
  text: '会员占比',
  xdata:[
    {value:234, name:'非会员'},
    {value:135, name:'个人卡'}
  ],
  color:['#ef2a82','#74a0ff'],
  type:['非会员','个人卡']
}


function List (){
  return (
    <div className="list">
      <Test list ={list}/>
      <Test2 list ={payMethodList}/>
      <Test3 list ={menmberList}/>
      <Test3 list ={tankList}/>
    </div>
  )
}


class BusBottom extends Component {
  render(){

    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500
    };

    return (
      <div className="busBottom">
        <Slider className="slider"  {...settings} > 
          <div>
            <Test list ={list}/>
          </div>
          <div>
            <Test2 list ={payMethodList}/>
          </div>
          <div>
            <Test3 list ={menmberList}/>
          </div>
          <div>
            <Test3 list ={tankList}/>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default BusBottom;
