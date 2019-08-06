import React,{Component} from 'react';
import { Link} from 'react-router-dom'
import './index.css';
import Logo from './../../static/images/iconOilCard.png';
import iconEchart from './../../static/images/iconEchart.png';
import iconMoney from './../../static/images/iconMoney.png';
import iconOilCard from './../../static/images/iconOilCard.png';
import iconTable from './../../static/images/iconTable.png';
import iconSys from './../../static/images/iconSys.png';


const navList = [
    {id:1,title:'经营状况',pic:iconEchart,path:'/manage'},
    {id:51,title:'收银业务',pic:iconMoney,path:'www.baidu.com'},
    {id:21,title:'油卡业务',pic:iconOilCard,path:'www.baidu.com'},
    {id:45,title:'查询报表',pic:iconTable,path:'www.baidu.com'},
    {id:16,title:'系统配置',pic:iconSys,path:'www.baidu.com'},

]

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        }
    }
    
    handleClick = (e) => {
        this.setState({
            current: e.id,
        });
    };

    render(){
        
        const navLists = navList.map((item, id) =>
            <Link className={ this.state.current === id ? 'active menuNav' :'menuNav' } to={item.path} key={id} onClick={this.handleClick.bind(this,item)}>
                <img className="pic" src={item.pic} alt=""/>
                <span className="title">{item.title} </span>
            </Link>
        );

        return (
            <div className="header">
                <div className="logoBox">
                    <img className="logo" src={Logo} title="油站管理系统" alt=''/>
                </div>
                <div className="menuBox">
                    {navLists}
                </div>
                <div className="handleBox">
                </div>
            </div>
        )
    }

}
export default Header;