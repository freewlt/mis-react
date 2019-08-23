import React,{Component} from 'react';
import { 
    Tabs, Table, Row, Col, Button, Select, DatePicker,
    Form,} from 'antd';
import reqwest from 'reqwest';
import '../index.css';

const { TabPane } = Tabs;
const { Option } = Select;
const columns = [
    {
        title: '发卡机构名称',
        dataIndex: 'key',
    },
    {
        title: '活动名称',
        dataIndex: 'oilSys',
    },
    {
        title: '活动类型',
        dataIndex: 'oilNum',
    },
    {
        title: '活动起始日期',
        dataIndex: 'st3ate',
    },
    {
        title: '活动结束日期',
        dataIndex: 'stwate',
    },
    {
        title: '生效时间',
        dataIndex: 'staete',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>(
            <div className="iconBtnGroup">
                <a href="javascript:;" title='查看详情' className="iconBtn lookIcon"></a>
                <a href="javascript:;" title='配置价格组' className="iconBtn configPriceGroupIcon"></a>
            </div>
        ),
    },
];

class PreferenPolicies extends Component {
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
            // Read total count from server
            // pagination.total = data.totalCount;
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
        <div className="mainBox preferenPolicies">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="油品优惠" key="1">
                    Content of tab 1
                    </TabPane>
                    <TabPane tab="特殊单位优惠" key="2">
                    Content of tab 2
                    </TabPane>
                    <TabPane tab="实体卡活动查询" key="3">
                      <Form className="ant-advanced-search-form" labelCol={{ span: 10 }}>
                        <Row>
                          <Col span={5}>
                            <Form.Item label="活动类型">
                              <Select className="selectBox">
                                <Option value="male">全部</Option>
                                <Option value="female">female</Option>
                              </Select>
                            </Form.Item>
                            </Col>
                            <Col span={5}>
                              <Form.Item label="活动起止日期">
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
                              <Form.Item label="活动终止日期">
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
                        onChange={this.handleTableChange}/>
                      </Form>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
  }

  
}
export default  Form.create({ name: 'coordinated' })(PreferenPolicies);
