import React,{Component} from 'react';
import { Table, Form } from 'antd';
import reqwest from 'reqwest';
import '../index.css';

const columns = [
    {
        title: '油品编号',
        dataIndex: 'key',
    },
    {
        title: '系统油品',
        dataIndex: 'oilSys',
    },
    {
        title: '油站油品',
        dataIndex: 'oilNum',
    },
    {
        title: '油品状态',
        dataIndex: 'state',
    },
    {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>(
            <div className="iconBtnGroup">
                <a href="javascript:;" title='查看详情' className="iconBtn lookBtn"></a>
                <a href="javascript:;" title='编辑' className="iconBtn editBtn"></a>
                <a href="javascript:;" title='禁用' className="iconBtn disableBtn"></a>
                <a href="javascript:;" title='启用' className="iconBtn enableBtn"></a>
            </div>
        ),
    },
  ];

class OilApplication extends Component {
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
        <div className="oilApplication">
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
export default  Form.create({ name: 'coordinated' })(OilApplication);
