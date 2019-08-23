import React,{Component} from 'react';
import { Tabs, Table, Row, Col, Button, Form, Select } from 'antd';import '../../index.css';

const { TabPane } = Tabs;
const { Option } = Select;
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

class InoutLog extends Component {
 
    render() {
        return (
            <div className="mainBox inOutLog">
                <div className="mainCon">
                    <Tabs>
                    <TabPane tab="实体卡充值报表" key="1">
                        <Form className="ant-advanced-search-form">
                            <Row>
                                <Col span={5}>
                                    <Form.Item>
                                      <Select placeholder="全部">
                                        <Option value="chin14a">全部</Option>
                                        <Option value="usa2">按年</Option>
                                      </Select>
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
export default InoutLog;