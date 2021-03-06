import React,{Component} from 'react';
import { Tabs, Form, Button, Input, Row, Col, Select, Checkbox, Radio, DatePicker } from 'antd';
import '../../index.css';

const { TabPane } = Tabs;
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['0', '-10#', '92#', '95#'];


class ModifyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checkedList: [],
        indeterminate: true,
        checkAll: false,
    };
}

handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
          labelCol: { span: 4 },
          wrapperCol: { span: 12 },
        };
        return (
        <div className="mainBox modifyCard">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="充值" key="1">
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <div className="title">卡片信息</div>
                            <Row>
                              <Col span={12}>
                                  <Form.Item label="卡号">
                                    <Input placeholder="" disabled/>
                                  </Form.Item>
                                </Col>
                                <Col span={12}>
                                  <Form.Item label="开卡类型">
                                      <span className="ant-form-text">个人用户</span>
                                  </Form.Item>
                              </Col>
                            </Row>
                            <Row>
                              <Col span={12}>
                                 <Form.Item label="卡类别">
                                     {getFieldDecorator('radio-group')(
                                         <Radio.Group>
                                             <Radio value="a">个人卡</Radio>
                                             <Radio value="b">出租车卡</Radio>
                                         </Radio.Group>
                                     )}
                                 </Form.Item>
                              </Col>
                              <Col span={12}>
                                 <Form.Item label="卡片属性">
                                     {getFieldDecorator('radio-groups')(
                                         <Radio.Group>
                                             <Radio value="ac">记名卡</Radio>
                                             <Radio value="be">不记名卡</Radio>
                                         </Radio.Group>
                                     )}
                                 </Form.Item>
                             </Col>
                         </Row>
                         <Row>
                             <Col span={12}>
                                 <Form.Item label="客户姓名">
                                     <Input placeholder=""/>
                                 </Form.Item>
                              </Col>
                              <Col span={12}>
                                 <Form.Item label="联系电话">
                                     <Input placeholder=""/>
                                 </Form.Item>
                             </Col>
                         </Row>
                         <Row>
                             <Col span={12}>
                                 <Form.Item label="证件类型">
                                     {getFieldDecorator('selwect', {
                                         rules: [{ required: true, message: 'Please select your country!' }],
                                     })(
                                         <Select placeholder="Please select a country">
                                             <Option value="card15">身份证</Option>
                                             <Option value="15">员工用户</Option>
                                         </Select>,
                                     )}
                                 </Form.Item>
                              </Col>
                              <Col span={12}>
                                 <Form.Item label="证件号码">
                                     <Input placeholder=""/>
                                 </Form.Item>
                             </Col>
                         </Row>
                         <Row>
                             <Col span={12}>
                                 <Form.Item label="推荐人">
                                     {getFieldDecorator('selecet', {
                                         rules: [{ required: true, message: 'Please select your country!' }],
                                     })(
                                         <Select placeholder="Please select a country">
                                             <Option value="china2">个人用户</Option>
                                             <Option value="usa1">员工用户</Option>
                                         </Select>
                                     )}
                                 </Form.Item>
                            </Col>
                            <Col span={12}>
                                 <Form.Item label="限制车辆">
                                     <Input placeholder=""/>
                                 </Form.Item>
                             </Col>
                         </Row>
                         <Row>
                             <Col span={12}>
                                 <Form.Item label="有效日期">
                                     <DatePicker showTime placeholder="Select Time" />
                                 </Form.Item>
                            </Col>  
                         </Row>
                         <Row>
                             <Col span={12}>
                                 <Form.Item label="可用油品">
                                     <Checkbox
                                         indeterminate={this.state.indeterminate}
                                         onChange={this.onCheckAllChange}
                                         checked={this.state.checkAll}>
                                       全选
                                     </Checkbox>
                                     <CheckboxGroup
                                     options={plainOptions}
                                     value={this.state.checkedList}
                                     onChange={this.onChange}
                                     />
                                 </Form.Item>
                             </Col>
                         </Row>
                          <Row>
                            <Col span={24}>
                                <Form.Item className="handleBtn" wrapperCol={{ offset: 1 }}>
                                    <Button className="areaBtn" type="primary">
                                        使用范围
                                    </Button>
                                    <Button className="determineBtn" type="primary" htmlType="submit">
                                        确认
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
export default  Form.create({ name: 'coordinated' })(ModifyCard);
