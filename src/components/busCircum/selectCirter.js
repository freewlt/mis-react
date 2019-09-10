import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Button, DatePicker } from 'antd';
import moment from 'moment';
import { chooseCycle } from '../../store/actionCreators';

import './index.css'
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;

const dateList=[
  {id:1,title:'近20天',status:false},
  {id:2,title:'近7天',status:false},
  {id:3,title:'昨天',status:false},
  {id:71,title:'今天',status:true},
  {id:5,title:'自定义',status:false}
]

class BusTop extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow:false
    }
  }

  handleClick = (e) => {
    const {dispatch} = this.props;
    dispatch(chooseCycle(e.id))
    if(e.id===5){
     this.setState({
       isShow:true
     })
    }else{
     this.setState({
      isShow:false
    })
    }
  };

  
  render(){
    
  const dateSelect = dateList.map(item=> 
    <Button className= { item.id === this.props.cycleCurrent ? 'btn active' : 'btn' } key={item.id} onClick={this.handleClick.bind(this,item)}>
        {item.title}
    </Button>
  )

    return (
      <div className="selectCirter">
          <div className="selectLf">
            <em className="symbol"></em>
            <span>鑫文龙油站</span>
            {dateSelect}
            {this.state.isShow === true ? <RangePicker className="rangeDate"
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}/> :''}
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


  const mapStateToProps = (state)=>{
    return {
      cycleCurrent:state.cycleCurrent
    }
  };
  const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch
    }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(BusTop)