import React,{Component} from 'react';
import { Table, Form, Button } from 'antd';
import reqwest from 'reqwest';
import '../../index.css';
import SearchCriteria from '../../../components/searchCriteria/index'
const columns = [
  {
      title: '收款方式',
      dataIndex: 'key',
  },
  {
      title: '系统统计笔数',
      dataIndex: 'no',
  },
  {
      title: '实际发生笔数',
      dataIndex: 'name',
  },
  {
      title: '系统统计金额',
      dataIndex: 'startTime',
  },
  {
      title: '实际发生金额',
      dataIndex: 'endTime',
  }
];

class PlungAccount extends Component {
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
              results: 5,
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
        <div className="mainBox shiftList plungAccount">
            <div className="mainCon">
                <SearchCriteria/>
                <table className="classReport">
                  <thead>
                    <tr>
                      <th colSpan="11">班报明细网点号：班次号：2019082201</th>
                    </tr>
                    <tr>
                      <th>交易类型</th>
                      <th>收款方式</th>
                      <th colSpan='3'>受理方式：本代本</th>
                      <th colSpan='3'>受理方式：本代它</th>
                      <th colSpan='3'>调试卡</th>
                    </tr>
                    <tr>
                      <th colSpan="2"></th>
                      <th>交易笔数</th>
                      <th>收款金额</th>
                      <th>促销成本</th>
                      <th>交易笔数</th>
                      <th>收款金额</th>
                      <th>促销成本</th>
                      <th>交易笔数</th>
                      <th>收款金额</th>
                      <th>促销成本</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>充值</td>
                      <td colSpan="10">暂无此类交易</td>
                    </tr>
                    <tr>
                      <td>充值取消</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>开卡（记账卡）</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>换卡（记账卡）</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>销卡</td>
                      <td colSpan="10">暂无此类交易</td>
                    </tr>
                  </tbody>
                </table>
               
                <div className="title">班报汇总网点号：班次号：2019082201</div>
                <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                />
            </div>
            <div className="btnGroup">
                <Button className="readBtn" type="primary">
                    扎帐处理
                </Button>
                <Button className="areaBtn" type="primary" onClick={this.showModal}>
                    取消
                </Button>
            </div>
        </div>
        );
  }
}
export default  Form.create({ name: 'coordinated' })(PlungAccount);
