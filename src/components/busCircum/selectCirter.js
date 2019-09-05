import React, { Component } from 'react';
import {  Button } from 'antd';
import './index.css'

const dateList=['近20天','近7天','昨天','今天','自定义']

class BusTop extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    
  const dateSelect = dateList.map(item=>
    <Button className="btn" key={item}>
        {item}
    </Button>
  )

    return (
      <div className="selectCirter">
          <div className="selectLf">
            <em className="symbol"></em>
            <span>鑫文龙油站</span>
            {dateSelect}
          </div>
          <div className="network">
            <div className="status">POS机：<span className="pos">3台</span></div>
            <div className="status">IP：192.168.05.2</div>
            <div className="status">网络：<span className="linkStatus"></span>正常</div>
          </div>
      </div>
    )
  }
}

export default BusTop;