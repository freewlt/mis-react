import React,{Component} from 'react';
import { Tabs, Table, Form, Input, Button, Row, Col, Select } from 'antd';
import reqwest from 'reqwest';
import '../../index.css';

const { Option } = Select;
const { TabPane } = Tabs;
const columns = [
    {
        title: '发卡机构名称',
        dataIndex: 'key',
    },
    {
        title: '卡号',
        dataIndex: 'oilSys',
    },
    {
        title: '同步序列号',
        dataIndex: 'oilNum',
    },
    {
        title: '卡片有效期',
        dataIndex: 'swtate',
    },
    {
        title: '卡片类型',
        dataIndex: 'stfate',
    },
    {
        title: '止付原因',
        dataIndex: 'stawte',
    }
];

class BlackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
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


    render() {
        return (
        <div className="mainBox blackList">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="黑名单查询" key="1">
                        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col>
                                    <Form.Item label="发卡机构">
                                    <Input className="searchInput"
                                        placeholder="发卡机构"
                                    />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label="卡号">
                                    <Input className="searchInput"
                                        placeholder="卡号"
                                    />
                                    </Form.Item>
                                </Col>
                                <Col span={4}>
                                    <Form.Item className="reason" label="止付原因">
                                        <Select className="reasonSelect" placeholder="全部">
                                            <Option value="1">全部</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Button className="searchBtn" type="primary" >
                                        搜索
                                        <span className="searchIcon"></span>
                                    </Button>
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
export default BlackList;
