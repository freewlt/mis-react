import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import Test from './lineEchart.js';

const xdata=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
const ydata1=[200, 149, 170, 123, 256, 106, 135, 162, 102, 200, 194, 133]
const ydata2=[106, 109, 190, 126, 287, 190, 175, 182, 148, 188, 180, 123]
const ydata3=[152, 100, 180, 204, 187, 197, 156, 142, 188, 288, 260, 223]
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '5000',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '5000',
  },
  {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '5000',
  },
  {
    key: '5',
    name: '胡彦祖',
    age: 42,
    address: '5000',
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '5000',
  },
];

const columns = [
  {
    title: '油品',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '销售金额',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '销售升数（L）',
    dataIndex: 'address',
    key: 'address',
  },
];

class EchartTable extends Component {
  render(){
    return (
      <div className="echartTable">
        <Test className="echart" xdata={xdata} ydata1 ={ydata1} ydata2={ydata2} ydata3={ydata3}/>
        <Table className="table" dataSource={dataSource} columns={columns}/>
      </div>
    )
  }
}

//export default busBottom;
export default connect()(EchartTable);