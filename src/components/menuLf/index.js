import React,{ Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import './index.css';

const { SubMenu } = Menu;

class MenuLf extends Component {
  constructor(props){
    super(props);
    this.state={
      curId:''
    }
  }

  handleClick = (e,item) => {
    this.setState({
      curId: e.id,
    });
  };
  
  render() {
    return (
      <div className="contentLf">
        <Menu className="menuBox"
          mode="inline" theme="dark"> 
          {
            this.props.menuList.map((item) =>{
                // const curId = this.props.location.pathname.split('/')[2];
                if(item.children){
                  return <SubMenu onClick={this.handleClick.bind(this,item)} key={item.id}
                  title={
                    <span>
                      <img className="iconPic" src={ this.state.curId === item.id ? item.mediumBg: item.medium} alt=""/>
                      <span className="title">{item.name}</span>
                    </span>
                  }>
                {
                  item.children.map((item,id) => (  
                   <Menu.Item key={id}> <Link to ={item.url}> {item.name}</Link></Menu.Item> 
                  )) 
                }
                </SubMenu>
                }else{
                  return <Menu.Item key={item.id} onClick={this.handleClick.bind(this,item)}> 
                      <Link to={item.url}> 
                        <img className={`iconPic`} src={ this.state.curId === item.id ? item.mediumBg: item.medium} alt=""/>
                        <span className="title">{item.name}</span>
                      </Link>
                    </Menu.Item>
                }
            })
          } 
        </Menu>
      </div>
    );
  }
}

export default withRouter(MenuLf);