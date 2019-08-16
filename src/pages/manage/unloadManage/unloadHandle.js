import React,{Component} from 'react';
import { 
    Tabs, Row, Col, Button, Select, Input, Radio,
    Form,} from 'antd';
import '../index.css';

const { TabPane } = Tabs;
const { Option } = Select;

class unloadHandle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
        };
    }

    render() {
        return (
        <div className="mainBox unloadHandle">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="卸油管理" key="1">
                      <Form className="unloadFormStart" labelCol={{ span: 5 }}>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="油罐">
                              <Select className="selectBox">
                                <Option value="">1</Option>
                                <Option value="">female</Option>
                              </Select>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="油品">
                                  <Input placeholder="92#" disabled/>
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="油站供应商">
                                <Select className="selectBox">
                                  <Option value="">中油燕宾17</Option>
                                  <Option value="">female</Option>
                                </Select>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="配送单号">
                                <Input placeholder=""/>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="配送车号">
                                  <Input placeholder=""/>
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="送油司机">
                                <Input placeholder=""/>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="配送单号">
                                <Input placeholder=""/>
                                <span className="unit">KG</span>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="配送车号">
                                  <Input placeholder=""/>
                                  <span className="unit">L</span>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="来单视温">
                                <Input placeholder=""/>
                                <span className="unit">℃</span>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="来单视密">
                                  <Input placeholder=""/>
                                  <span className="unit">kg/m³</span>
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="来单标密">
                                  <Input placeholder=""/>
                                  <span className="unit">kg/m³</span>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="油样视温">
                                <Input placeholder=""/>
                                <span className="unit">℃</span>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="油样视密">
                                  <Input placeholder=""/>
                                  <span className="unit">kg/m³</span>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="卸油方式">
                                <Radio.Group>
                                  <Radio value="a">自动</Radio>
                                  <Radio value="b">手动</Radio>
                                </Radio.Group>
                            </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="油品密度（kg/m³）">
                                <Input placeholder="" disabled/>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="油品重量（kg）">
                                  <Input placeholder=""/>
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="油品温度（℃）">
                                  <Input placeholder=""/>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Col span={8}>
                            <Form.Item label="油水总高（mm）">
                                <Input placeholder=""/>
                            </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="水高（mm）">
                                  <Input placeholder=""/>
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item label="卸油前升数">
                                  <Input placeholder=""/>
                                  <span className="unit">L</span>
                              </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                          <Button className="searchBtn" type="primary" htmlType="submit">
                            开始卸油
                          </Button>
                        </Row>
                      </Form>
                      <Form className="unloadFormEnd" labelCol={{ span: 5 }}>
                      <Row>
                        <Col span={8}>
                          <Form.Item label="油品密度（kg/m³）">
                            <Input placeholder="" disabled/>
                          </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label="油品重量（kg）">
                              <Input placeholder=""/>
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label="油品温度（℃）">
                              <Input placeholder=""/>
                            </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                        <Col span={8}>
                          <Form.Item label="油水总高（mm）">
                              <Input placeholder=""/>
                          </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label="水高（mm）">
                                <Input placeholder=""/>
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label="卸油后升数">
                              <Input placeholder=""/>
                            </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                        <Col span={8}>
                          <Form.Item label="实收升数">
                              <Input placeholder="" disabled/>
                              <span className="unit">L</span>
                          </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label="总出枪量">
                                <Input placeholder="" disabled/>
                                <span className="unit">L</span>
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label="油品损耗">
                                <Input placeholder="" disabled/>
                                <span className="unit">L</span>
                            </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                        <Col span={8}>
                          <Form.Item label="卸油开始时间">
                              <Input placeholder="" disabled/>
                              <span className="unit">L</span>
                          </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item label="卸油结束时间">
                                <Input placeholder="" disabled/>
                                <span className="unit">L</span>
                            </Form.Item>
                          </Col>
                      </Row>
                      <Row>
                        <Button className="searchBtn" type="primary" htmlType="submit">
                          结束卸油
                        </Button>
                      </Row>
                    </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
  }

  
}
export default unloadHandle;
