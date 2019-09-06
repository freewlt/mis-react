import React,{Component} from 'react';
import { Table, Row, Col, Button } from 'antd';
import reqwest from 'reqwest';
import '../index.css';

  
const columns = [
    {
        title: '油罐编号',
        dataIndex: 'tankNo',
    },
    {
        title: '油品号',
        dataIndex: 'key',
    },
    {
        title: '液位仪编号',
        dataIndex: 'num',
    },
    {
        title: '油罐剩余容量',
        dataIndex: 'capacity',
    },
    
    {
        title: '油料液位高度',
        dataIndex: 'height',
    },
    {
        title: '油罐观测总升数',
        dataIndex: 'LPM',
    },
    {
        title: '油罐最大容量',
        dataIndex: 'rongLiang',
    },
    {
        title: '油罐状态',
        dataIndex: 'state',
    },
    {
        title: '数据刷新时间',
        dataIndex: 'refreshtime',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>(
            <div className="iconBtnGroup">
                <a href="javascript:;" title='查看详情' className="iconBtn lookIcon"></a>
                <a href="javascript:;" title='编辑' className="iconBtn editIcon"></a>
            </div>
        ),
    },
  ];

class TankConfig extends Component {
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
        <div className="mainBox tankConfig">
            <div className="mainCon">
                <Row className="conditionGroup">
                    <Col>
                        <Button className="addBtn" type="primary">
                            新增
                            <span className="newIcon"></span>
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
            </div>


        </div>
        );
  }

  
}
export default TankConfig;
