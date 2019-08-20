import React from 'react';
import '../index.css'
import { Button } from 'antd';

const list = [
    {id:1,title:'订单1'},
    {id:51,title:'订单2'},
    {id:21,title:'一键现金'},
    {id:45,title:'修改支付'},
    {id:16,title:'非油退货'},
    {id:211,title:'取消订单'},
    {id:435,title:'电子会员'},
    {id:126,title:'油卡会员'},
    {id:4435,title:'交易查询'},
    {id:1226,title:'手输油品'},
    {id:4335,title:'签到'},

]

class Center extends React.Component {

    render() {
    
        const btnList =list.map((item) =>
            <Button className="btn" key={item.id}>{item.title}</Button>
        )

        return (
            <div className="centerCon">
                {btnList}
           </div>
        );
	}
		
	

}
export default Center;