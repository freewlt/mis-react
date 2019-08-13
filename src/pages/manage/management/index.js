import React,{Component} from 'react';
import { Form, Select, Input, Button,Row, Col } from 'antd';
import '../index.css';


const { Option } = Select;

class Management extends Component {
  constructor(props){
    super(props);
    this.state = {
      expand: false,
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
        <div className="mainCon">
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
            <Row>
              <Col span={12}>
                <Form.Item label="移动支付商号">
                  {getFieldDecorator('移动支付商号', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="移动支付终端号">
                  {getFieldDecorator('移动支付终端号', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="加油卡商户号">
                  {getFieldDecorator('加油卡商户号', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="加油卡终端号">
                  {getFieldDecorator('加油卡终端号', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="小票是否打印">
                  {getFieldDecorator('小票是否打印', {
                    rules: [{ required: true, message: 'Please select your gender!' }],
                  })(
                    <Select
                      placeholder="Select a option and change input text above"
                      onChange={this.handleSelectChange}
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="电子发票是否打印">
                  {getFieldDecorator('电子发票是否打印', {
                    rules: [{ required: true, message: 'Please select your gender!' }],
                  })(
                    <Select
                      placeholder="Select a option and change input text above"
                      onChange={this.handleSelectChange}
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="是否积分抵现">
                  {getFieldDecorator('是否积分抵现', {
                    rules: [{ required: true, message: 'Please select your gender!' }],
                  })(
                    <Select
                      placeholder="Select a option and change input text above"
                      onChange={this.handleSelectChange}
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
      </div>
    );
  }

  
}
export default  Form.create({ name: 'coordinated' })(Management);
