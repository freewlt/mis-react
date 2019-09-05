import React, { Component } from 'react';
import sale from '../../static/images/busCircum/sale.png';
import storeValue from '../../static/images/busCircum/storeValue.png';
import member from '../../static/images/busCircum/member.png';
import nonOil from '../../static/images/busCircum/nonOil.png';

const list = [
  {id:1, price:'158445.00',lum:150,num:154154,url:sale,title1:'销售额（￥）',title2:'升数（L）',title3:'笔次'},
  {id:3, price:'158445.00',lum:150,num:154154,url:nonOil,title1:'非油总金额',title2:'笔次',title3:'客单价'},
  {id:2, price:'158445.00',lum:150,num:154154,url:storeValue,title1:'累计储值',title2:'实体卡',title3:'电子会员'},
  {id:4, price:'158445.00',lum:150,url:member,title1:'会员累计',title2:'新增'}
]

class Statistic extends Component {
  render(){
    
    const statisList = list.map(item=>
      <div className="list" key={item.id}>
        <img className="icon" src={item.url} alt=""/>
        <div className="dataList">
          <span>{item.title1}</span>
          <span className="data">{item.price}</span>
        </div>
        <div className="dataList">
          <span>{item.title2}</span>
          <span className="data">{item.lum}</span>
        </div>
        <div className="dataList">
          <span>{item.title3}</span>
          <span className="data">{item.num}</span>
        </div>
      </div>
      )

    return (
      <div className="statistic">
       {statisList}
      </div>
    )
  }
}

export default Statistic;