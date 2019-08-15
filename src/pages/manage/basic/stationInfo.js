import React,{Component} from 'react';
import { Form, Select, Input, Button,Row, Col } from 'antd';
import '../index.css';


const { Option } = Select;

class StationInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
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

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

 
  
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="manageCon">
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Row>
              <Col span={12}>
                <Form.Item label="油站名称">
                  {getFieldDecorator('油站名称', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="油站编号">
                  {getFieldDecorator('油站编号"', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="工作模式">
                    {getFieldDecorator('工作模式', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                    })(
                        <Select
                            placeholder="看泵"
                            onChange={this.handleSelectChange}
                        >
                          <Option value="male">看泵</Option>
                          <Option value="female">female</Option>
                        </Select>,
                    )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="支付模式">
                    {getFieldDecorator('支付模式', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                    })(
                        <Select
                            placeholder="全部"
                            onChange={this.handleSelectChange}
                        >
                          <Option value="all">全部</Option>
                          <Option value="female">female</Option>
                        </Select>,
                    )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="联系人">
                  {getFieldDecorator('联系人', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="联系电话">
                  {getFieldDecorator('联系电话', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="站点状态">
                  {getFieldDecorator('站点状态', {
                    rules: [{ required: true, message: 'Please select your gender!' }],
                  })(
                    <Select
                      placeholder="正常"
                      onChange={this.handleSelectChange}
                    >
                      <Option value="male">正常</Option>
                      <Option value="female">female</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item wrapperCol={{ span: 24, offset: 24 }}>
                <Button type="primary" htmlType="submit">
                  确定
                  <span className="determineIcon"></span>
                </Button>
              </Form.Item>
            </Row>
          </Form>
      </div>
    );
  }

  
}
export default  Form.create({ name: 'coordinated' })(StationInfo);
