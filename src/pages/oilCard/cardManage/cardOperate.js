import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Tabs, Form, Input, Button, Row, Col, Select } from 'antd';
import '../../index.css';

const { Option } = Select;
const { TabPane } = Tabs;

class CardOperate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    render() {
      const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 12 },
      };
        return (
        <div className="mainBox cardOperate">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="卡片操作" key="1">
                        <Form {...formItemLayout} className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col span={4}>
                                    <Form.Item label="证件类型">
                                      <Select>
                                        <Option value="1">身份证</Option>
                                        <Option value="2">1</Option>
                                       </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={4}>
                                  <Form.Item label="证件号码">
                                    <Input className="searchInput"/>
                                  </Form.Item>
                                </Col>
                                <Col span={4}>
                                  <Form.Item label="手机号">
                                    <Input className="searchInput"/>
                                  </Form.Item>
                                </Col>
                                <Col className="btnGroup">
                                  <Button className="searchBtn" type="primary" >
                                      搜索
                                      <span className="searchIcon"></span>
                                  </Button>
                                  <Button className="exportBtn" type="primary" >
                                      读卡
                                  </Button>
                                </Col>
                            </Row>
                            <Row className="rowBetween">
                              <Col span={12}>
                                  <Form.Item label="卡号">
                                    <Input placeholder="022152154854848" disabled/>
                                  </Form.Item>
                              </Col>
                              <Col span={12}>
                                  <Form.Item label="卡片类别">
                                    <Input placeholder="个人卡" disabled/>
                                  </Form.Item>
                              </Col>
                            </Row>
                            <Row className="rowBetween">
                              <Col span={12}>
                                  <Form.Item label="卡片属性">
                                    <Input placeholder="记名卡，非记账卡，非主附卡" disabled/>
                                  </Form.Item>
                              </Col>
                              <Col span={12}>
                                  <Form.Item label="卡片等级">
                                    <Input placeholder="1" disabled/>
                                  </Form.Item>
                              </Col>
                            </Row>
                            <Row className="rowBetween">
                              <Col span={12}>
                                  <Form.Item label="客户姓名">
                                      <Input placeholder="" disabled/>
                                  </Form.Item>
                              </Col>
                              <Col span={12}>
                                  <Form.Item label="身份证号">
                                    <Input placeholder="12424242424" disabled/>
                                  </Form.Item>
                              </Col>
                            </Row>
                            <Row className="rowBetween">
                              <Col span={12}>
                                  <Form.Item label="卡片余额">
                                    <Input placeholder="110.552" disabled/>
                                  </Form.Item>
                              </Col>
                              <Col span={12}>
                                  <Form.Item label="开卡网点">
                                    <Input placeholder="运营部测试油站" disabled/>
                                  </Form.Item>
                              </Col>
                            </Row>
                            <Row className="rowBetween">
                              <Col span={12}>
                                  <Form.Item label="状态">
                                    <Input placeholder="正常" disabled/>
                                  </Form.Item>
                              </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item className="handleBtn" wrapperCol={{ offset: 1 }}>
                                        <Button className="readBtn" type="primary">
                                            销卡
                                        </Button>
                                        <Button className="areaBtn" type="primary">
                                            换卡
                                        </Button>
                                        <Button className="determineBtn" type="primary" htmlType="submit">
                                            重置密码
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
  }

  
}
// export default CardOperate;
const mapStateToProps = (state)=>{
  return {
      visible:state.visible,
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
      dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardOperate);