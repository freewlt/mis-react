import React from 'react';
import { Table, Popconfirm } from 'antd';
import '../index.css';


const list = [
    {id:'1',},
    {id:'02'},
    {id:'03'},
    {id:'04'},
    {id:'05'},
    {id:'06'},
    {id:'07'},
    {id:'08'},
    {id:'09'},
    {id:'10'},
    {id:'11'},
    {id:'12',},
    {id:'13'},
    {id:'14'},
    {id:'15'},
    {id:'16'},
    {id:'17'},
    {id:'18'},
    {id:'19'},
    {id:'20'},
    {id:'21'},
    {id:'22',},
    {id:'23'},
    {id:'24'},
    {id:'25'},
    {id:'26'},
    {id:'27'},
    {id:'28'},
    {id:'29'},
    {id:'30'},
    {id:'31'}, 
    {id:'32',},
    {id:'33'},
    {id:'34'},
    {id:'35'},
    {id:'36'},

]
class Left extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
                width: '20%',
            },
            {
                title: '单价',
                dataIndex: 'geneder',
            },
            {
                title: '数量',
                dataIndex: 'gendeer',
                render:(text,record)=>(
                    <div className="txt"></div>
                )
            },
            {
                title: '小计',
                dataIndex: 'gendesr',
                width: '20%',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.data.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <div className="iconBtnGroup">
                                <a href="javascript:;" title='编辑' className="iconBtn deleteBlackIcon"></a>
                            </div>
                        </Popconfirm>
                      ) : null,
            },
        ];
    }
    state = {
        data: [
            {
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
              },
              {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
              },
        ],
    };

    handleDelete = key => {
        const dataSource = [...this.state.data];
        this.setState({ data: dataSource.filter(item => item.key !== key) });
    };
    
    render() {
        const btnList =list.map((item) =>
            <div className="gunNum" key={item.id}>{item.id}</div>
        )
        return (
           <div className="leftCon">
                <div className="listGood">
                    <Table
                    columns={this.columns}
                    dataSource={this.state.data}/>
                </div>
                <div className="oilGun">
                    {btnList}
                </div>
           </div>
        );
	}
		
	

}
export default Left;