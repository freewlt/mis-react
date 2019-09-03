import React, {Component} from 'react';
import { Form, Row, Col, Input, Button, Select } from 'antd';

import '../index.css'
const { Option } = Select;

class OilFillerConfig extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[
        {id:1},
        {id:12},
        {id:122}
      ]
    }
  }

  render(){
    const mainList = this.state.list.map((item)=>
      <Form className="oilFillerForm"  key={item.id} >
      <Row>
        <Col span={4}>
          <Form.Item label="加油点">
            <Input className="gunInput" placeholder="1" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="油枪">
            <Input className="gunInput" placeholder="1"/>
            <span>号枪</span>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="油罐编号" className="tankNoSelect">
            <Select  placeholder="1">
              <Option value="male">1</Option>
              <Option value="female">2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="最大泵码">
            <Input placeholder="9999" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="油品选项编号">
            <Input placeholder="1" />
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item className="edit">
            <Button type="primary">
              保存
              <span className="determineIcon"></span>
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={4}>
          <Form.Item label="油枪">
            <Input className="gunInput" placeholder="1"/>
            <span>号枪</span>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="油罐编号" className="tankNoSelect">
            <Select  placeholder="1">
              <Option value="male">1</Option>
              <Option value="female">2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="最大泵码">
            <Input placeholder="9999" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="油品选项编号">
            <Input placeholder="1" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
    )

    return (
      <div className="mainBox oilFilerConfig">
        <div className="mainCon">
            {mainList}
            <Row className="btnGroup">
              <Form.Item wrapperCol={{  offset: 2 }}>
                <Button type="primary" htmlType="submit">
                  添加
                  <span className="newIcon"></span>
                </Button>
              </Form.Item>
            </Row>
        </div>
      </div>
    )
  }

}

export default OilFillerConfig;