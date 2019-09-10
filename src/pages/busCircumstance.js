import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectCirter from '../components/busCircum/selectCirter';
import Statistic from '../components/busCircum/statistic';
import EchartTable from '../components/busCircum/echarTable';
import Echart from '../components/busCircum/echart';
import BusBottom from '../components/busCircum/busBottom';
import axios from 'axios';

class busCircumstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordlist:[],
    }
  }

  pieInit = item =>{
    const _this =this;
      axios.get('./linetable.json').then((res) => {
        _this.setState({
          'recordlist':res.data.data.recordList
        })
      }).catch(err => {
          console.log(err)
      });
  }

  componentDidMount(){
    this.pieInit()
  }

  render(){
    
    return (
      <div className="busCircumstance">
        <SelectCirter/>
        <Statistic recordlist={this.state.recordlist} />
        <EchartTable/>
        <Echart/>
        <BusBottom/>
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

export default connect(mapStateToProps, mapDispatchToProps)(busCircumstance)