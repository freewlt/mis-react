import React,{Component} from 'react';
import { Tabs, Table, Form, Input, Button, Row, Col, Select } from 'antd';
import reqwest from 'reqwest';
import '../../index.css';

const { Option } = Select;
const { TabPane } = Tabs;
const columns = [
    {
        title: '交易名称名称',
        dataIndex: 'key',
    },
    {
        title: '交易金额',
        dataIndex: 'oilSys',
    },
    {
        title: '交易日期',
        dataIndex: 'oilNum',
    },
    {
        title: '是否开票',
        dataIndex: 'swtate',
    },
    {
        title: '发票类型',
        dataIndex: 'stfate',
    },
    {
        title: '已开票金额',
        dataIndex: 'stawte',
    },
    {
        title: '已退货金额',
        dataIndex: 'sta3wte',
    },
    {
        title: '可开票金额',
        dataIndex: 'staewte',
    },
    {
        title: '开票时间',
        dataIndex: 'stawte3',
    }
];

class InvoiceManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            balance: 1200.01,
            yiKai:0,
            selectedRowKeys: [],
        }
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

    onSelectChange = selectedRowKeys => {
      this.setState({ selectedRowKeys });
    };

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
        };

        return (
        <div className="mainBox invoiceManage">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="发票管理" key="1">
                        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col>
                                    <Form.Item label="卡号">
                                    <Input className="searchInput"
                                        placeholder="卡号"
                                    />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Button className="searchBtn" type="primary">
                                    读卡
                                    </Button>
                                </Col>
                                <Col span={4}>
                                    <Form.Item className="reason" label="交易名称">
                                        <Select className="reasonSelect">
                                            <Option value="1">全部</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={4}>
                                    <Form.Item className="reason" label="开票标志">
                                        <Select className="reasonSelect">
                                            <Option value="1">未开票</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Button className="searchBtn" type="primary" >
                                        搜索
                                        <span className="searchIcon"></span>
                                    </Button>
                                    <Button className="invoiceBtn" type="primary">
                                     开具发票
                                    </Button>
                                </Col>
                            </Row>
                            <div className="balance">
                              <p className="txt">账户可开票余额：<span className="red">{this.state.balance}</span>元，本次开票金额<span className="red">{this.state.yiKai}</span>元</p>
                            </div>
                            <Table
                                columns={columns}
                                rowKey={record => record.login.uuid}
                                dataSource={this.state.data}
                                pagination={this.state.pagination}
                                loading={this.state.loading}
                                onChange={this.handleTableChange}
                                rowSelection={rowSelection}
                            />
                        </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
  }

  
}
export default InvoiceManage;
