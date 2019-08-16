import React,{Component} from 'react';
import { Table, Form } from 'antd';
import reqwest from 'reqwest';
import '../index.css';

  
const columns = [
    {
        title: '序号',
        dataIndex: 'key',
    },
    {
        title: '终端编号',
        dataIndex: 'oilSys',
    },
    {
        title: '终端类型',
        dataIndex: 'oilNum',
    },
    {
        title: '终端序列号',
        dataIndex: 'state',
    },
    {
        title: '通讯IP地址',
        dataIndex: 'kesy',
    },
    {
        title: '通讯端口号',
        dataIndex: 'oileSys',
    },
    {
        title: '终端状态',
        dataIndex: 'oilNusm',
    },
    {
        title: '绑定加油员',
        dataIndex: 'statee',
    },
    {
        title: '更新时间',
        dataIndex: 'operati',
    },
  ];

class SmartDevice extends Component {
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
        return (
        <div className="mainBox oilApplication">
            <div className="mainCon">
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
export default  Form.create({ name: 'coordinated' })(SmartDevice);
