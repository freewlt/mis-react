import React,{Component} from 'react';
import { Table, Form } from 'antd';
import reqwest from 'reqwest';
import '../index.css';
import SearchCriteria from '../../../components/searchCriteria/index'

  
const columns = [
    {
        title: '状态',
        dataIndex: 'key',
    },
    {
        title: '变价申请名称',
        dataIndex: 'no',
    },
    {
        title: '变价申请单号',
        dataIndex: 'name',
    },
    {
        title: '生效日期',
        dataIndex: 'startTime',
    },
    {
        title: '失效日期',
        dataIndex: 'endTime',
    },
    {
        title: '生效时间',
        dataIndex: 'oilSys',
    },
    {
        title: '失效时间',
        dataIndex: 'oilSyse',
    },
    {
        title: '优先级',
        dataIndex: 'oilSwys',
    },
    {
        title: '申请时间',
        dataIndex: 'oilSeys',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>(
            <div className="iconBtnGroup">
                <a href="javascript:;" title='查看详情' className="iconBtn lookIcon"></a>
            </div>
        ),
    },
  ];

class OilBaseRecord extends Component {
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
        <div className="mainBox shiftList">
            <div className="mainCon">
                <SearchCriteria/>
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
export default  Form.create({ name: 'coordinated' })(OilBaseRecord);
