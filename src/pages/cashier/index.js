import React,{Component} from 'react';
import { Form, Input, Button,Row, Col, } from 'antd';


class Casheng extends Component {
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
export default  Form.create({ name: '154' })(Casheng);
