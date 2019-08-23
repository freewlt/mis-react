import React,{Component} from 'react';
import { Tabs, Table, Row, Col, Button, DatePicker, Form,} from 'antd';import '../../index.css';

const { TabPane } = Tabs;
const columns = [
    {
      title: '时间',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '班次',
      dataIndex: 'age',
      key: 'age',
    },
    { title: 'IC卡卡号', dataIndex: 'addr1ess', key: '1' },
    { title: '单位名称', dataIndex: 'addr2ess', key: '2' },
    { title: '姓名', dataIndex: 'addre3ss', key: '3' },
    { title: '车号', dataIndex: 'addre4ss', key: '4' },
    { title: '加油员姓名', dataIndex: 'add5ress', key: '5' },
    { title: '油品', dataIndex: 'addr6ess', key: '6' },
    { title: '单价', dataIndex: 'addres4s', key: '7' },
    { title: '加油升数', dataIndex: 'ad3dress', key: '8' },
    { title: '油品应收', dataIndex: 'add3ress', key: '9' },
    { title: '非油应收', dataIndex: 'addre7ss', key: '10' },
    { title: '非油优惠', dataIndex: 'addr8ess', key: '11' },
    { title: '非油实收', dataIndex: 'addr38ess', key: '12' },
    { title: '客户联系电话', dataIndex: 'add9ress', key: '13' },
    { title: 'IC卡类型', dataIndex: 'addres67s', key: '14' },
    { title: 'IC卡属性', dataIndex: 'addre45ss', key: '15' },
    { title: 'IC卡等级', dataIndex: 'addr23ess', key: '16' },
    { title: '流水号', dataIndex: 'addre1ss', key: '17' },
    { title: '系统参考号', dataIndex: 'add34ress', key: '18' },
    { title: '开卡网点', dataIndex: 'addr345ess', key: '19' },
    { title: '消费网点', dataIndex: 'addr346ess', key: '20' },
    { title: '主附卡标识', dataIndex: 'addre234ss', key: '21' }
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

class PhyCardConsume extends Component {
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
            <div className="mainBox phyCardConsume">
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
export default PhyCardConsume;