import React,{Component} from 'react';
import { Tabs, Table, Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import reqwest from 'reqwest';
import '../../index.css';

const { Option } = Select;
const { TabPane } = Tabs;
const columns = [
    {
        title: '受理业务',
        dataIndex: 'key',
    },
    {
        title: '操作时间',
        dataIndex: 'oilSys',
    },
    {
        title: '卡号',
        dataIndex: 'oilNum',
    },
    {
        title: '卡类别',
        dataIndex: 'swtate',
    },
    {
        title: '卡属性',
        dataIndex: 'stfate',
    },
    {
        title: '卡余额',
        dataIndex: 's3tawte',
    },
    {
        title: '单位名称',
        dataIndex: 'sw2tate',
    },
    {
        title: '加油员',
        dataIndex: 'st3fate',
    },
    {
        title: '班次号',
        dataIndex: 'staw2te',
    }
];

class CardDetail extends Component {
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
        <div className="mainBox cardDetail">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="卡管明细查询" key="1">
                        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch} labelCol={{ span: 7 }}>
                            <Row>
                                <Col span={7}>
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
                                <Col span={7}>
                                    <Form.Item label="单位名称">
                                      <Input className="searchInput"/>
                                    </Form.Item>
                                </Col>
                                <Col span={7}>
                                    <Form.Item label="主/附卡">
                                        <Select className="reasonSelect">
                                            <Option value="1">附卡</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={7}>
                                    <Form.Item label="交易名称">
                                        <Select className="reasonSelect">
                                            <Option value="1">附卡</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={2}></Col>
                                <Col span={7}>
                                    <Form.Item label="起始交易日期">
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
                                <Col span={7}>
                                    <Form.Item label="终止交易日期">
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
                            </Row>
                            <Row className="btnGroup">
                              <Col>
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
export default CardDetail;
