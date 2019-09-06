import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import ReactEcharts from 'echarts-for-react'
import axios from 'axios';

class EchartTable extends Component {
  constructor(props){
    super(props);
    this.state={
      option: {},
      dataSource:[],
      columns:[]
    }
  }

  componentDidMount(){
    const _this = this;
    axios.get('./linetable.json').then((res) => {
      const option = {
        title: {
          text: '油品销量趋势统计',
          x: 'center',
          y: 'bottom',
          textStyle: {
              fontWeight: 'normal',
      　　　　 fontSize: 16
          }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            y: 6,
            data: ['92#汽油','-10柴油','95#柴油']
        },
        color: ['#ffa052','#f15fa0','#81ddec'],
        grid: {
            top: 30,
            left: '2%',
            right: '2%',
            bottom: '18%',
            containLabel: true
        },
        xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: res.data.data.xdata
            }
        ],
        yAxis: [
            {
              type: 'value'
            }
        ],
        series: [
            {
              name: '92#汽油',
              type: 'line',
              data: res.data.data.ydata1
            },
            {
              name: '-10柴油',
              type: 'line',
              data: res.data.data.ydata2,
            },
            {
              name: '95#柴油',
              type: 'line',
              data: res.data.data.ydata3,
            },
        ]
      }
      _this.setState({
        'option': option,
        'dataSource': res.data.data.dataSource,
        'columns':res.data.data.columns
      })
    }).catch(err => {
      console.log(err)
    });
  }
  
  render(){
    return (
      <div className="echartTable">
        <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option} />
        <Table className="table" dataSource={this.state.dataSource} columns={this.state.columns}/>
      </div>
    )
  }
}

export default connect()(EchartTable);