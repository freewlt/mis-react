import React from 'react';
import { Table, Input , Button, Popconfirm } from 'antd';
import classname from 'classname';
import '../index.css';

const payMethodList = [
    {id:1,title:'电子卡','class':'eleCardIcon'},
    {id:51,title:'银行卡','class':'bankCardIcon'},
    {id:21,title:'支付宝','class':'alipayIcon'},
    {id:45,title:'微  信','class':'wxIcon'},
    {id:16,title:'加油卡','class':'oilCardIcon'},
    {id:211,title:'本站卡','class':'stationCardIcon'},
    {id:435,title:'现  金','class':'moneyIcon'},
    {id:126,title:'更多支付','class':''},
];

const payDetailList = [
    {id:1,title:'应收金额','price':'0'},
    {id:51,title:'红包减扣','price':'0'},
    {id:21,title:'积分减扣','price':'0'},
    {id:45,title:'优品优惠','class':'wxIcon','price':'0'},
    {id:16,title:'非油优惠','price':'0'},
    {id:211,title:'实付金额','price':'0.00'},
]

class Right extends React.Component {
    state={
        columns : [
            {
                title: '商品名称',
                dataIndex: 'name',
                width:'20%',
                render: (text, record) =>{
                    return (
                        <div className="goodName">
                            <div className= {classname({'discount': record.type===1, 'discountGreen': record.type===2, 'discountOrange': record.type===3})}>{record.discount}</div>
                            {record.name}
                        </div>
                    )
                },
            },
            {
                title: '单价',
                dataIndex: 'unitPrice',
                width:'20%',
            },
            {
                title: '数量',
                dataIndex: 'num',
                width:'20%',
                render: (text, record) =>(
                    <div className="goodNum">
                        <span className="btn minus" onClick={()=> this.decrease(record)}>-</span>
                        <span className="num">{record.num}</span>
                        <span className="btn plus" onClick={()=> this.increase(record)}>+</span>
                    </div>
                ),
            },
            {
                title: '小计',
                dataIndex: 'gendesr',
                width:'20%',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                this.state.dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <div className="iconBtnGroup">
                            <a href="javascript:;" title='删除' className="iconBtn deleteBlackIcon"></a>
                        </div>
                    </Popconfirm>
                  ) : null,
            },
        ],
        num : 10,
        dataSource: [
            {
                key: 0,
                name: '哇哈哈矿泉水',
                unitPrice: 243,
                amount: 120,
                num:10,
                note: 'transfer',
                discount:'2件9折',
                type:1,
              },
              {
                key: 1,
                name: '哇哈哈矿泉水-03-11',
                unitPrice: 243,
                amount: 21,
                num:12,
                discount:'3件8折',
                type:2,
              },
              {
                key: 2,
                name: '哇哈哈矿泉水11',
                unitPrice: 98,
                amount: 21,
                num:12,
                discount:'2件9折',
                type:3,
              },
        ]
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };
    
    increase= (record) =>{
        this.setState({ dataSource: this.state.dataSource.map((it) => it.key === record.key ? {...record, num: ++record.num} : it )  })
    }
     decrease= (record) =>{
        this.setState({ dataSource: this.state.dataSource.map((it) => it.key === record.key ? {...record, num: --record.num} : it )  })
        
    }

    render() {

        const columns = this.state.columns.map((col, index) => ({
            ...col,
        }));

        const payMethod =payMethodList.map((item) =>
            <Button className="btn" key={item.id}>
                <span className={item.class}></span>
                {item.title}
            </Button>
        )

        const payDetail = payDetailList.map(item=>
            <li className="bill" key={item.title}>
                <span>{item.title}</span>
                <span>￥{item.price}</span>
            </li> 
        )

        return (
           <div className="rightCon">
            <div className="tableBox">
                    <ul className="tableSymbol">
                        <li><span className="hot"></span>-10#</li>
                        <li>5.00</li>
                        <li>60L</li>
                        <li>300.00</li>
                        <li><span className="vip"></span></li>
                    </ul>
                    <Table className="listGood" components={this.components} 
                    columns={columns} dataSource={this.state.dataSource} />
                </div>
                <div className="mnemoniCodeBox">
                    <Input className="mnemoniCodeInput" placeholder="请扫码商品条码"/>
                    <Button className="mnemoniCodeBtn" type="primary">
                        助记码
                        <span className="mnemoniCodeIcon"></span>
                    </Button>
                </div>
                <div className="payDetail">
                    <div className="payList">
                        <ul className="payBill">
                          {payDetail} 
                        </ul>
                    </div>
                    <div className="payMethod">
                        {payMethod}
                    </div>
                </div>
           </div>
        );
	}
		
	

}
export default Right;