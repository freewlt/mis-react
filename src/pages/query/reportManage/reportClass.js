import React,{Component} from 'react';
import { Tabs, Table } from 'antd';
import SearchCriteria from '../../../components/searchCriteria'
import reqwest from 'reqwest';
import '../../index.css';

const { TabPane } = Tabs;
const columns = [
    {
        title: '状态',
        dataIndex: 'key',
    },
    {
        title: '变价申请名称',
        dataIndex: 'oilSys',
    },
    {
        title: '变价申请单号',
        dataIndex: 'oilNum',
    },
    {
        title: '生效日期',
        dataIndex: 'swtate',
    },
    {
        title: '失效日期',
        dataIndex: 'stfate',
    },
    {
        title: '生效时间',
        dataIndex: 'stawte',
    },
    {
        title: '失效时间',
        dataIndex: 'staete',
    },
    {
        title: '优先级',
        dataIndex: 'statse',
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

class ReportClass extends Component {
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
        <div className="mainBox reportClass">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="班结" key="1">
                        <SearchCriteria/>
                        <Table
                            columns={columns}
                            rowKey={record => record.login.uuid}
                            dataSource={this.state.data}
                            pagination={this.state.pagination}
                            loading={this.state.loading}
                            onChange={this.handleTableChange}
                        />
                    </TabPane>
                </Tabs>
            </div>
        </div>
        );
  }

  
}
export default ReportClass;
