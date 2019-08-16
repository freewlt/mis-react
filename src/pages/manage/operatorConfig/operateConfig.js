import React,{Component} from 'react';
import { Table, Row, Col, Button } from 'antd';
import reqwest from 'reqwest';
import { connect } from 'react-redux';
import ModalBox from '../../../components/modal/modal';
import { isShow } from '../../../store/actionCreators';
import '../index.css';

  
const columns = [
    {
        title: '序号',
        dataIndex: 'tankNo',
    },
    {
        title: '加油员编号',
        dataIndex: 'key',
    },
    {
        title: '姓名',
        dataIndex: 'num',
    },
    {
        title: '联系电话',
        dataIndex: 'capacity',
    },
    
    {
        title: '密码',
        dataIndex: 'height',
    },
    {
        title: '营销二维码',
        dataIndex: 'LPM',
    },
    {
        title: '状态',
        dataIndex: 'rongLiang',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>(
            <div className="iconBtnGroup">
                <a href="javascript:;" title='编辑' className="iconBtn editIcon"></a>
                <a href="javascript:;" title='禁用' className="iconBtn disableIcon"></a>
            </div>
        ),
    },
  ];

class operateConfig extends Component {
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

    //弹窗显示
    showModal = () => {
        const {dispatch} = this.props;
        dispatch(isShow(true))
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
        <div className="mainBox operateConfig">
            <div className="mainCon">
                <Row className="conditionGroup">
                    <Col>
                        <Button className="addBtn" type="primary" onClick={this.showModal}>
                            新建
                            <span className="newIcon"></span>
                        </Button>
                        <Button className="addBtn" type="primary">
                            打印
                            <span className="printIcon"></span>
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
                <ModalBox/>
            </div>


        </div>
        );
  }
}

const mapStateToProps = (state)=>{
    return {
        visible:state.visible,
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(operateConfig);
