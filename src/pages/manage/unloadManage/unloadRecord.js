import React,{Component} from 'react';
import { Table, Form, Row, Col, Button, DatePicker } from 'antd';
import reqwest from 'reqwest';
import '../../index.css';
  

const columns = [
    {
        title: '卸油时间',
        dataIndex: 'time',
    },
    {
        title: '油罐',
        dataIndex: 'shift',
    },
    {
        title: '油品',
        dataIndex: 'cashier',
    },
    {
        title: '油站供应商',
        dataIndex: 'oilAmt',
    },
    {
        title: '车牌号',
        dataIndex: 'feiYouAmt',
    },
    {
        title: '送油司机',
        dataIndex: 'discoutnAmt',
    },
    {
        title: '来单数量（KG）',
        dataIndex: 'returnPrice',
    },
    {
        title: '来单升数（L）',
        dataIndex: 'sumPrice',
    },
    {
        title: '来单视温（℃）',
        dataIndex: 'payMethod',
    },
    {
        title: '来单视密（kg/cm³）',
        dataIndex: 'state',
    },
    {
        title: '罐內油温（卸油前）',
        dataIndex: 'before',
    },
    {
        title: '罐內油温（卸油后）',
        dataIndex: 'wendu',
    },
    {
        title: '实收油升数（L）',
        dataIndex: 'l',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        width:'200px',
        render: (text, record) =>(
            <div className="iconBtnGroup">
                <a href="javascript:;" title='查看详情' className="iconBtn lookIcon"></a>
                <a href="javascript:;" title='打印' className="iconBtn printIcon"></a>
            </div>
        ),
    },
  ];

class unloadRecord extends Component {
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
        const { startValue, endValue, endOpen } = this.state;

        return (
        <div className="mainBox orderQuery">
            <div className="mainCon">
            <Form className="oilFillerForm">
                    <Row>
                        <Col>
                            <Form.Item label="订单时间" className="timeBox">
                                <DatePicker
                                disabledDate={this.disabledStartDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={startValue}
                                placeholder="Start"
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                                />-  
                                <DatePicker
                                    disabledDate={this.disabledEndDate}
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    value={endValue}
                                    placeholder="End"
                                    onChange={this.onEndChange}
                                    open={endOpen}
                                    onOpenChange={this.handleEndOpenChange}
                                />
                            </Form.Item>
                            </Col>
                            <Col>
                              <Button className="searchBtn" type="primary" htmlType="submit">
                                搜索
                                <span className="searchIcon"></span>
                              </Button>
                          </Col>
                    </Row>
                </Form>

                <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                />
            </div>


        </div>
        );
  }

  
}
export default  Form.create({ name: 'coor' })(unloadRecord);
