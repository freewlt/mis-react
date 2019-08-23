import React,{Component} from 'react';
import { Tabs, Table, Row, Col, Button, DatePicker, Form,} from 'antd';import '../../index.css';

const { TabPane } = Tabs;
const columns = [
    {
      title: '卡段编号',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '副卡段编号',
      dataIndex: 'age',
      key: 'age',
    },
    { title: '发卡机构名称', dataIndex: 'addr1ess', key: '1' },
    { title: '起始卡号', dataIndex: 'addr2ess', key: '2' },
    { title: '终止卡号', dataIndex: 'addre3ss', key: '3' },
    { title: '库存状态', dataIndex: 'addre4ss', key: '4' },
    { title: '卡段使用状态', dataIndex: 'add5ress', key: '5' },
    { title: '操作', dataIndex: 'addr6ess', key: '6' }
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

class InventoryManage extends Component {
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
            <div className="mainBox inventoryManage">
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
                            <Table columns={columns} dataSource={data} />
                        </Form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
  }

  
}
export default InventoryManage;