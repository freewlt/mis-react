import React,{Component} from 'react';
import { Table, Form } from 'antd';
import reqwest from 'reqwest';
import '../index.css';
import SearchCriteria from '../../../components/searchCriteria/index'

  
const columns = [
    {
        title: '模板名称',
        dataIndex: 'key',
    },
    {
        title: '班次号',
        dataIndex: 'no',
    },
    {
        title: '班次名称',
        dataIndex: 'name',
    },
    {
        title: '开始时间',
        dataIndex: 'startTime',
    },
    {
        title: '结束时间',
        dataIndex: 'endTime',
    },
    {
        title: '是否下班',
        dataIndex: 'oilSys',
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

class shiftList extends Component {
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
export default  Form.create({ name: 'coordinated' })(shiftList);
