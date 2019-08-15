import React,{Component} from 'react';
import { Table, Form, Row, Col, Input, Button, Select, DatePicker,Tag } from 'antd';
import reqwest from 'reqwest';
import '../../index.css';

const { Option } = Select;
  
const { CheckableTag } = Tag;
const tagsFromServer = ['全部', '现金', '银联卡', '微信', '电子卡', '加油卡', '支付宝'];

const columns = [
    {
        title: '交易时间',
        dataIndex: 'time',
    },
    {
        title: '班次',
        dataIndex: 'shift',
    },
    {
        title: '收银员',
        dataIndex: 'cashier',
    },
    {
        title: '油品金额',
        dataIndex: 'oilAmt',
    },
    
    {
        title: '非油金额',
        dataIndex: 'feiYouAmt',
    },
    {
        title: '优惠总金额',
        dataIndex: 'discoutnAmt',
    },
    {
        title: '退货金额',
        dataIndex: 'returnPrice',
    },
    {
        title: '合计金额',
        dataIndex: 'sumPrice',
    },
    {
        title: '支付方式',
        dataIndex: 'payMethod',
    },
    {
        title: '支付状态',
        dataIndex: 'state',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>(
            <div className="iconBtnGroup">
                <a href="javascript:;" title='查看详情' className="iconBtn lookIcon"></a>
                <a href="javascript:;" title='打印' className="iconBtn printIcon"></a>
            </div>
        ),
    },
  ];

class OrderQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            startValue: null,
            endValue: null,
            endOpen: false,
            selectedTags: [],
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
    
      handleChange(tag, checked) {
        const { selectedTags } = this.state;
        console.log(tag)
        if(tag=='全部'){
            const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
           this.setState({ selectedTags: nextSelectedTags });
            console.log([...selectedTags, tag])
            console.log(nextSelectedTags)
        }else{
            const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
            this.setState({ selectedTags: nextSelectedTags });
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


    render() {
        const { startValue, endValue, endOpen,selectedTags } = this.state;

        return (
        <div className="mainBox orderQuery">
            <div className="mainCon">
            <Form className="oilFillerForm">
                    <Row>
                        <Col span={24}>
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
                            <Form.Item label="订 单 号">
                                <Input className="orderNumInput" placeholder="1"/>
                            </Form.Item>
                            <Form.Item label="油 枪 号 ">
                                <Select className="selectBox gunSelect" placeholder="全部">
                                <Option value="male">全部</Option>
                                <Option value="female">2</Option>
                                </Select>
                            </Form.Item>
                            </Col>
                    </Row>
                    <Row>
                    
                    <Col span={24}>
                            <Form.Item label="油 品 号">
                                <Select className="selectBox oilSelect" placeholder="全部">
                                    <Option value="male">全部</Option>
                                    <Option value="female">2</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="收 银 员">
                                <Select className="selectBox cashierSelect" placeholder="全部">
                                    <Option value="male">全部</Option>
                                    <Option value="female">2</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="班 次 号">
                                <Input className="shiftNum" placeholder="1"/>
                            </Form.Item>
                            </Col>
                    </Row>
                    <Row>
                    
                    <Col span={24}>
                            <Form.Item label="支付方式">
                                {tagsFromServer.map(tag => (
                                    <CheckableTag
                                    key={tag}
                                    checked={selectedTags.indexOf(tag) > -1}
                                    onChange={checked => this.handleChange(tag, checked)}
                                    >
                                    {tag}
                                    </CheckableTag>
                                ))}
                            </Form.Item>
                            <Form.Item className="handleBtn">
                                <Button  className="resetBtn" type="primary">
                                    重置
                                    <span className="resetIcon"></span> 
                                </Button>
                                <Button  type="primary">
                                    查询
                                    <span className="searchIcon"></span> 
                                </Button>
                            </Form.Item>
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
export default  Form.create({ name: 'coordinated' })(OrderQuery);
