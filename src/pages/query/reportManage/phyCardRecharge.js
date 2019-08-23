import React,{Component} from 'react';
import { Tabs, Table, Row, Col, Button, DatePicker, Form,} from 'antd';import '../../index.css';

const { TabPane } = Tabs;
const columns = [
    {
      title: '充值日期',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '充值时间',
      dataIndex: 'age',
      key: 'age',
    },
    { title: '班次', dataIndex: 'address', key: '1' },
    { title: 'IC卡卡号', dataIndex: 'address', key: '2' },
    { title: '单位名称', dataIndex: 'address', key: '3' },
    { title: '姓名', dataIndex: 'address', key: '4' },
    { title: 'IC卡类型', dataIndex: 'address', key: '5' },
    { title: 'IC卡属性', dataIndex: 'address', key: '6' },
    { title: 'IC卡等级', dataIndex: 'address', key: '7' },
    { title: '车号', dataIndex: 'address', key: '8' },
    { title: '原值', dataIndex: 'address', key: '9' },
    { title: '充值', dataIndex: 'address', key: '10' },
    { title: '返现金额', dataIndex: 'address', key: '11' },
    { title: '现值', dataIndex: 'address', key: '12' },
    { title: '支付方式', dataIndex: 'address', key: '13' },
    { title: '开卡网点', dataIndex: 'address', key: '14' },
    { title: '充值网点', dataIndex: 'address', key: '15' },
    { title: '操作员', dataIndex: 'address', key: '16' },
    { title: '订单编号', dataIndex: 'address', key: '17' },
    { title: '主附卡标识', dataIndex: 'address', key: '18' },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];

class PhyCardRecharge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startValue: null,
            endValue: null,
            endOpen: false,
        };
    }

    disabledStartDate = startValue => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      };
    
      disabledEndDate = endValue => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
          return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
      };
    
      onChange = (field, value) => {
        this.setState({
          [field]: value,
        });
      };
    
      onStartChange = value => {
        this.onChange('startValue', value);
      };
    
      onEndChange = value => {
        this.onChange('endValue', value);
      };
    
      handleStartOpenChange = open => {
        if (!open) {
          this.setState({ endOpen: true });
        }
      };
    
      handleEndOpenChange = open => {
        this.setState({ endOpen: open });
      };

    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div className="mainBox phyCardRecharge">
                <div className="mainCon">
                    <Tabs>
                    <TabPane tab="实体卡充值报表" key="1">
                        <Form className="ant-advanced-search-form">
                            <Row>
                                <Col span={5}>
                                    <Form.Item label="开始日期">
                                        <DatePicker
                                        disabledDate={this.disabledStartDate}
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        value={startValue}
                                        placeholder="Start"
                                        onChange={this.onStartChange}
                                        onOpenChange={this.handleStartOpenChange}/>
                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                <Form.Item label="结束日期">
                                    <DatePicker
                                        disabledDate={this.disabledEndDate}
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        value={endValue}
                                        placeholder="End"
                                        onChange={this.onEndChange}
                                        open={endOpen}
                                        onOpenChange={this.handleEndOpenChange}/>
                                </Form.Item>
                                </Col>
                                <Col>
                                    <Button className="searchBtn" type="primary" htmlType="submit">
                                        搜索
                                        <span className="searchIcon"></span>
                                    </Button>
                                </Col>
                            </Row>
                            <Table columns={columns} dataSource={data} scroll={{ x: 100 }} />
                        </Form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
  }

  
}
export default PhyCardRecharge;
