import React, { Component } from 'react';
import SelectCirter from '../components/busCircum/selectCirter';
import Statistic from '../components/busCircum/statistic';
import EchartTable from '../components/busCircum/echarTable';
import Echart from '../components/busCircum/echart';
import BusBottom from '../components/busCircum/busBottom';

class busCircumstance extends Component {
  render(){
    return (
      <div className="busCircumstance">
        <SelectCirter/>
        <Statistic/>
        <EchartTable/>
        <Echart/>
        <BusBottom/>
      </div>
    )
  }
}

export default busCircumstance;