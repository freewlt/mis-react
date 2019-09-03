import React, { Component } from 'react';
import { Table, Row, Col, Button, Popconfirm } from 'antd';

import '../index.css';

import upPic from '../../../static/images/up.png';
import downPic from '../../../static/images/down.png';

class PicSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
            title: '图片',
            dataIndex: 'pic',
            render: (text,record) =>(
              <div className="picBox">
                  <img className="pic" src={text.pic} alt="" />
              </div>
          ),
        },
        {
            title: '图片名称',
            dataIndex: 'title',
        },
        {
            title: '图片排序',
            render: (text, index) =>{
              return (
                <div className="iconBtnGroup">
                  <img className="upPic" src={upPic} alt="" onClick={() =>this.handleClickBySortup(this,index)}/>
                  <img className="downPic" src={downPic} alt="" onClick={() =>this.handleClickBySortDown(this,index)}/>
                </div>
              )
            }
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) =>
                this.state.dataSource.length >= 1 ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                      <div className="iconBtnGroup">
                          <a href="javascript:;" title='删除' className="iconBtn deleteIcon"></a>
                      </div>
                  </Popconfirm>
                ) : null,
            
        },
      ],
      dataSource:[
        {
          key: 1,
          title: '2018862.png',
          pic: '../../../static/images/pic.png',
        },
        {
          key: 2,
          title: '胡彦祖',
          pic: '../../../static/images/pic.png',
        },
      ],
      pagination: {},
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };
//点击向上排序按钮事件
handleClickBySortup(index, e) {
  let arr = this.state.dataSource;
  if (arr.length !== 0) {
      let temp = arr[e.key + 1];
      arr[e.key + 1] = arr[e.key];
      arr[e.key] = temp;
      this.setState({
        dataSource: this.state.dataSource,
      });
  }
  
}

//点击向下排序按钮事件
handleClickBySortDown(index, e) {
  let arr = this.state.dataSource;
   if (arr.length !== 0) {
       let temp = arr[e.key - 1];
      arr[e.key - 1] = arr[e.key];
      arr[e.key] = temp;
      // this.setState({
      //   dataSource: this.state.dataSource,
      // });
   }

}

  render(){
    return (
      <div className="mainBox picSet">
        <div className="mainCon">
          <Row className="conditionGroup">
              <Col>
                  <Button className="addBtn" type="primary">
                      新增
                      <span className="newIcon"></span>
                  </Button>
              </Col>
          </Row>
          <Table
          columns={this.state.columns}
          dataSource={this.state.dataSource}
          pagination={this.state.pagination}
          onChange={this.handleTableChange}
          />
        </div>
      </div>
    )
  }
}

export default PicSet;