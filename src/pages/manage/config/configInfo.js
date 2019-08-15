import React,{Component} from 'react';
import { Form, Select, Input, Button,Row, Col } from 'antd';
import '../index.css';


const { Option } = Select;

class configInfo extends Component {
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
                <Form.Item label="移动支付商户号">
                  {getFieldDecorator('移动支付商户号', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="移动支付终端号">
                  {getFieldDecorator('移动支付终端号"', {
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
                    {getFieldDecorator('移动支付终端号', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                    })(
                        <Select
                            placeholder="打印"
                            onChange={this.handleSelectChange}
                        >
                          <Option value="male">打印</Option>
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
                            placeholder="打印"
                            onChange={this.handleSelectChange}
                        >
                          <Option value="all">打印</Option>
                          <Option value="female">不打印</Option>
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
                      placeholder="否"
                      onChange={this.handleSelectChange}
                    >
                      <Option value="male">否</Option>
                      <Option value="female">是</Option>
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
export default  Form.create({ name: 'coordinated' })(configInfo);
