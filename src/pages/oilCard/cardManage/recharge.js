import React,{Component} from 'react';
import { connect } from 'react-redux';
import ModalBox from '../../../components/modal/modalRecharge';
import { isShow } from '../../../store/actionCreators';
import { 
    Tabs,
    Form,
    Button,
    Input,
    Row,
    Col, } from 'antd';
import '../../index.css';

const { TabPane } = Tabs;
const plainOptions = ['0', '-10#', '92#', '95#'];


class Recharge extends Component {
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

      //弹窗显示
    showModal = () => {
      const {dispatch} = this.props;
      dispatch(isShow(true))
    };

    render() {
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        };
        return (
        <div className="mainBox recharge">
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
                                    <Form.Item label="卡片类别">
                                       <Input placeholder="" disabled/>
                                    </Form.Item>
                                </Col>
                             </Row>
                             <Row>
                                 <Col span={12}>
                                     <Form.Item label="卡片属性">
                                       <Input placeholder="" disabled/>
                                     </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                     <Form.Item label="卡等级">
                                        <Input placeholder="" disabled/>
                                     </Form.Item>
                                 </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="客户姓名">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                  </Col>
                                  <Col span={12}>
                                    <Form.Item label="身份证号">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="手机号码">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="客户单位">
                                        <Input placeholder="" disabled/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="卡片余额">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="开卡网点">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div className="title">充值信息</div>
                            <Row>
                                <Col span={12}>
                                    <Form.Item label="充值余额">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                  </Col>
                                  <Col span={12}>
                                    <Form.Item label="大写">
                                        <Input placeholder=""/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item className="handleBtn" wrapperCol={{ offset: 4 }}>
                                        <Button className="readBtn" type="primary">
                                            读卡
                                        </Button>
                                        <Button className="areaBtn" type="primary" onClick={this.showModal}>
                                            充值
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        <ModalBox/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
  }
}
// export default  Form.create({ name: 'coordinated' })(Recharge);

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

export default connect(mapStateToProps, mapDispatchToProps)(Recharge);