import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import './index.css';
import axios from 'axios'

const { SubMenu } = Menu;
class menuLf extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  handleClick = e => {
    console.log('click ', e.medium);
    e.medium=e.mediumBg
  };
  
  render() {
    return (
      <div className="contentLf">
        <Menu className="menuBox"
          mode="inline" theme="dark"> 
          {
            this.props.menuList.map((item) =>{
                if(item.children){
                  return <SubMenu onClick={this.handleClick.bind(this,item)} key={item.id}
                  title={
                    <span>
                      <img className="iconPic" src={item.flag?item.medium:item.mediumBg} alt=""/>
                      <span className="title">{item.name}</span>
                    </span>
                  }>
                {
                  item.children.map((item,id) => (  
                    <Menu.Item key={id} onClick={this.handleClick.bind(this,item)}>{item.name}</Menu.Item> 
                  )) 
                }
                </SubMenu>
                }else{
                  return <Menu.Item key={item.id}
                  onClick={this.handleClick.bind(this,item)}> 
                    <img className="iconPic" src={item.medium} alt=""/>
                    <span className="title">{item.name}</span>
                  </Menu.Item>
                }
              
            }
            )
          } 
        </Menu>
      </div>
    );
  }

  
}

export default menuLf;