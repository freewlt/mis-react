import React,{Component} from 'react';
import { Tabs, Table, Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import reqwest from 'reqwest';
import '../../index.css';

const { Option } = Select;
const { TabPane } = Tabs;
const columns = [
    {
        title: '卡号',
        dataIndex: 'key',
    },
    {
        title: '交易类型',
        dataIndex: 'oilSys',
    },
    {
        title: '交易时间',
        dataIndex: 'oilNum',
    },
    {
        title: '交易金额',
        dataIndex: 'swtate',
    },
    {
        title: '余额',
        dataIndex: 'stfate',
    },
    {
        title: '消费油站',
        dataIndex: 's3tawte',
    },
    {
        title: '交易流水',
        dataIndex: 'sw2tate',
    }
];

class TradeQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            startValue: null,
            endValue: null,
            endOpen: false,
        };
    }

    componentDidMount() {
        this.fetch();
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    };

    fetch = (params = {}) => {
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then(data => {
            const pagination = { ...this.state.pagination };
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    };

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
        <div className="mainBox tradeQuery">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="卡管明细查询" key="1">
                        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col span={4}>
                                    <Form.Item label="卡号">
                                    <Input className="searchInput"
                                        placeholder="卡号"
                                    />
                                    </Form.Item>
                                </Col>
                                <Col span={2}>
                                    <Button className="searchBtn" type="primary">
                                    读卡
                                    </Button>
                                </Col>
                                <Col span={4}>
                                    <Form.Item label="起始日期">
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
                                <Col span={4}>
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
                                <Col span={4}>
                                    <Form.Item label="交易类型">
                                        <Select>
                                            <Option value="1">全部</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col className="btnGroup">
                                  <Button className="searchBtn" type="primary" >
                                      搜索
                                      <span className="searchIcon"></span>
                                  </Button>
                                  <Button className="exportBtn" type="primary" >
                                      导出
                                      <span className="exportIcon"></span>
                                  </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <Form.Item label="卡片类别">
                                        <span className="ant-form-text">个人用户</span>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="卡片属性">
                                        <span className="ant-form-text">个人用户</span>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="身份证号">
                                        <span className="ant-form-text">158482148714547851</span>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="手机号码">
                                        <span className="ant-form-text">15811478588</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <Form.Item label="卡片等级">
                                        <span className="ant-form-text">个人用户</span>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="卡片余额">
                                        <span className="ant-form-text">个人用户</span>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="客户姓名">
                                        <span className="ant-form-text">个人用户</span>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="开卡网点">
                                        <span className="ant-form-text">运营部测试油站</span>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Table
                                columns={columns}
                                rowKey={record => record.login.uuid}
                                dataSource={this.state.data}
                                pagination={this.state.pagination}
                                loading={this.state.loading}
                                onChange={this.handleTableChange}
                            />
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
  }

  
}
export default TradeQuery;
