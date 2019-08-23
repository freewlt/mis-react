import React,{Component} from 'react';
import { Tabs, Table, Form, Input, Button, Row, Col, Select } from 'antd';
import { connect } from 'react-redux';
import ModalBox from '../../../components/modal/modalOilUnitSet';
import { isShow } from '../../../store/actionCreators';
import reqwest from 'reqwest';
import '../../index.css';

const { Option } = Select;
const { TabPane } = Tabs;

class OilUnitSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            modalTitle:''
        };
        this.columns = [
            {
                title: '单位Id',
                dataIndex: 'key',
            },
            {
                title: '单位名称',
                dataIndex: 'oilfgSys',
            },
            {
                title: '单位级别',
                dataIndex: 'ke3y',
            },
            {
                title: '上级单位名称',
                dataIndex: 'oilSy3s',
            },
            {
                title: '主卡卡号',
                dataIndex: 'kee3y',
            },
            {
                title: '负责人',
                dataIndex: 'oi3lSys',
            },
            {
                title: '联系电话',
                dataIndex: 'keey',
            },
            {
                title: '单位状态',
                dataIndex: 'oilSys',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                        <a href="javascript:;" title='编辑' className="iconBtn editIcon" onClick={this.showModal.bind(this,'编辑')}></a>
                        <a href="javascript:;" title='删除' className="iconBtn deleteIcon"></a>
                    </div>
                    )
                },
            },
        ]
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
    
    //弹窗显示
    showModal = (e) => {
        this.setState({
            modalTitle:e
        })
        const {dispatch} = this.props;
        dispatch(isShow(true))
    };

    render() {
        return (
        <div className="mainBox oilUnitSet">
            <div className="mainCon">
                <Tabs>
                    <TabPane tab="受理卡类查询" key="1">
                        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                            <Row>
                                <Col>
                                    <Form.Item label="单位名称">
                                    <Input className="searchInput"
                                        placeholder=""
                                    />
                                    </Form.Item>
                                </Col>
                                <Col>
                                    <Form.Item label="主卡号">
                                    <Input className="searchInput"
                                        placeholder=""
                                    />
                                    </Form.Item>
                                </Col>
                                <Col span={4}>
                                    <Form.Item className="reason" label="单位状态">
                                        <Select className="reasonSelect">
                                            <Option value="1">正常</Option>
                                            <Option value="2">1</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col className="btnGroup">
                                    <Button className="searchBtn" type="primary" >
                                        搜索
                                        <span className="searchIcon"></span>
                                    </Button>
                                    <Button className="newBtn" type="primary" onClick={this.showModal.bind(this,'新增')}>
                                        新增
                                        <span className="newIcon"></span>
                                    </Button>
                                </Col>
                            </Row>
                            <Table
                                columns={this.columns}
                                rowKey={record => record.login.uuid}
                                dataSource={this.state.data}
                                pagination={this.state.pagination}
                                loading={this.state.loading}
                                onChange={this.handleTableChange}
                            />
                        </Form>
                        <ModalBox title={this.state.modalTitle}/>
                    </TabPane>
                </Tabs>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(OilUnitSet);