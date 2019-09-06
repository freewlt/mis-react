import React,{Component} from 'react';
import { connect } from 'react-redux';
import {  Tabs, Form, Select, Radio, DatePicker, Button, Input, Checkbox, Row, Col, } from 'antd';
import ModalBox from '../../../components/modal/modalUseArea';
import { isShow } from '../../../store/actionCreators';
import '../../index.css';

const { TabPane } = Tabs;
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['0', '-10#', '92#', '95#'];


class OpenCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: [],
            indeterminate: true,
            checkAll: false,
            modalTitle:''
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

      //弹窗显示
      showModal = (e) => {
        this.setState({
            modalTitle:e
        })
        const {dispatch} = this.props;
        dispatch(isShow(true))
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        // const formItemLayout = {
        // //    labelCol: { span: 4 },
        // //    wrapperCol: { span: 12 },
        // };
        return (
        <div className="mainBox openCard">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="个人用户" key="1">
                        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡号">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                    <Form.Item label="开卡类型">
                                        <span className="ant-form-text">个人用户</span>
                                    </Form.Item>
                                </Col>
                             </Row>
                             <Row>
                                <Col span={24}>
                                    <Form.Item label="卡类别">
                                        {getFieldDecorator('radio-group')(
                                            <Radio.Group>
                                                <Radio value="a">个人卡</Radio>
                                                <Radio value="b">出租车卡</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
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
                                <Col span={24}>
                                    <Form.Item label="客户姓名">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                    <Form.Item label="联系电话">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item label="证件号码">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item label="限制车辆">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="有效日期">
                                        <DatePicker showTime placeholder="Select Time" />
                                    </Form.Item>
                                    <Form.Item label="卡片等级" hasFeedback>
                                        {getFieldDecorator('selectf', {
                                            rules: [{ required: true, message: 'Please select your country!' }],
                                        })(
                                            <Select placeholder="1">
                                                <Option value="chin14a">1</Option>
                                                <Option value="usa2">2</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item className="handleBtn" wrapperCol={{ offset: 2 }}>
                                        <Button className="readBtn" type="primary">
                                            读卡
                                        </Button>
                                        
                                        <Button className="areaBtn" type="primary" onClick={this.showModal.bind(this,'使用范围')}>
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
                    <TabPane tab="员工用户" key="2">
                        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡号">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                    <Form.Item label="开卡类型">
                                        <span className="ant-form-text">个人用户</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡类别">
                                        {getFieldDecorator('radio-group')(
                                            <Radio.Group>
                                                <Radio value="a">内部卡</Radio>
                                                <Radio value="b">公务车卡</Radio>
                                                <Radio value="c">调试卡</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="卡片属性">
                                        {getFieldDecorator('radio-groups')(
                                            <Radio.Group>
                                                <Radio value="ac">记名卡</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="客户姓名">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                    <Form.Item label="联系电话">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item label="证件号码">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item label="限制车辆">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="有效日期">
                                        <DatePicker showTime placeholder="Select Time" />
                                    </Form.Item>
                                    <Form.Item label="卡片等级" hasFeedback>
                                        {getFieldDecorator('selectf', {
                                            rules: [{ required: true, message: 'Please select your country!' }],
                                        })(
                                            <Select placeholder="1">
                                                <Option value="chin14a">1</Option>
                                                <Option value="usa2">2</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item className="handleBtn" wrapperCol={{ offset: 2 }}>
                                        <Button className="readBtn" type="primary">
                                            读卡
                                        </Button>
                                        <Button className="areaBtn" type="primary" onClick={this.showModal.bind(this,'使用范围')}>
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
                    <TabPane tab="单位用户-主卡" key="3">
                        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡号">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                    <Form.Item label="开卡类型">
                                        <span className="ant-form-text">单位用户</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡类别">
                                        <span className="ant-form-text">单位卡</span>
                                    </Form.Item>
                                    <Form.Item label="主卡标识">
                                        <span className="ant-form-text">主卡</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡片属性">
                                        {getFieldDecorator('radio-groups')(
                                            <Radio.Group>
                                                <Radio value="ac">记账卡</Radio>
                                                <Radio value="a">非记账卡</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="客户姓名">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="联系电话">
                                        <Input placeholder=""/>
                                    </Form.Item>
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
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="证件号码">
                                        <Input placeholder=""/>
                                    </Form.Item>
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
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="有效日期">
                                        <DatePicker showTime placeholder="Select Time" />
                                    </Form.Item>
                                    <Form.Item label="卡片等级" hasFeedback>
                                        {getFieldDecorator('selectf', {
                                            rules: [{ required: true, message: 'Please select your country!' }],
                                        })(
                                            <Select placeholder="1">
                                                <Option value="chin14a">1</Option>
                                                <Option value="usa2">2</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="单位名称">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                    <Form.Item label="共享模式">
                                        {getFieldDecorator('radiod-groups')(
                                            <Radio.Group>
                                                <Radio value="ac">共享额度</Radio>
                                                <Radio value="a">独享额度</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="信用额度">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item className="handleBtn" wrapperCol={{ offset: 2 }}>
                                        <Button className="readBtn" type="primary">
                                            读卡
                                        </Button>
                                        <Button className="areaBtn" type="primary" onClick={this.showModal.bind(this,'使用范围')}>
                                            选择用油单位
                                        </Button>
                                        <Button className="determineBtn" type="primary" htmlType="submit">
                                            确认
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </TabPane>
                    <TabPane tab="单位用户-附属卡" key="4">
                        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡号">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                    <Form.Item label="开卡类型">
                                        <span className="ant-form-text">单位用户</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡类别">
                                        <span className="ant-form-text">单位卡</span>
                                    </Form.Item>
                                    <Form.Item label="卡片属性">
                                        {getFieldDecorator('radio-groups')(
                                            <Radio.Group>
                                                <Radio value="ac">记账卡</Radio>
                                                <Radio value="a">非记账卡</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="主卡标识">
                                        <span className="ant-form-text">主卡</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="单位名称">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                    <Form.Item label="主卡卡号">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="共享模式">
                                        {getFieldDecorator('radiod-groups')(
                                            <Radio.Group>
                                                <Radio value="ac">共享额度</Radio>
                                                <Radio value="a">独享额度</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="客户姓名">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                    <Form.Item label="联系电话">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item label="证件号码">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                                    <Form.Item label="有效日期">
                                        <DatePicker showTime placeholder="Select Time" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="附属卡额度">
                                        <Input placeholder="" />
                                    </Form.Item>
                                    <Form.Item label="限制车辆">
                                        <Input placeholder="" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="卡片等级" hasFeedback>
                                        {getFieldDecorator('selectf', {
                                            rules: [{ required: true, message: 'Please select your country!' }],
                                        })(
                                            <Select placeholder="1">
                                                <Option value="chin14a">1</Option>
                                                <Option value="usa2">2</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
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
                            <div className="consumeChoose">
                                <Checkbox>消费金额及次数限制（金额单位：元）</Checkbox>
                            </div>
                            <Row className="consumeLimt">
                                <Col span={24}>
                                    <Form.Item label="累计次数">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                    <Form.Item label="累计金额">
                                        <Input placeholder="" />
                                    </Form.Item>
                                    <Form.Item label="累计周期">
                                        {getFieldDecorator('selecdtf', {
                                            rules: [{ required: true, message: 'Please select your country!' }],
                                        })(
                                            <Select placeholder="按日">
                                                <Option value="chin14a">按日</Option>
                                                <Option value="usa2">按年</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div className="consumeChoose">
                                <Checkbox>单笔消费金额限制（金额单位：元）</Checkbox>
                            </div>
                            <Row className="consumeLimt">
                                <Col span={24}>
                                    <Form.Item label="单笔上线">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                    <Form.Item label="单笔下线">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className="openCardForBtnGroup">
                                    <Form.Item className="handleBtn">
                                        <Button className="readBtn" type="primary">
                                            读卡
                                        </Button>
                                        <Button className="areaBtn" type="primary">
                                            选择用油单位
                                        </Button>
                                        <Button className="areaBtn" type="primary" onClick={this.showModal.bind(this,'使用范围')}>
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
                <ModalBox title={this.state.modalTitle}/>
            </div>
        </div>
        );
  }
}

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'coordinated' })(OpenCard));