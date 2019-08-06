import React,{Component} from 'react';
import './index.css';
import Logo from './../../static/images/oilCard.png';
import { Menu, Icon } from 'antd';

class Header extends Component {
    state = {
        current: 'mail',
    }
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    render(){
        return (
            <div className="header">
                <div className="logoBox">
                    <img className="logo" src={Logo} alt=""/>
                </div>
                <div className="menuBox">
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                            <Icon type="mail"/>
                            Navigation One
                        </Menu.Item>
                     </Menu>
                </div>
                <div className="handleBox">
                </div>
            </div>
        )
    }

}
export default Header;