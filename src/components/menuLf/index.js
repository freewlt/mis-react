import React,{ Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { chooseMenu } from '../../store/actionCreators'
import './index.css';

const { SubMenu } = Menu;

class MenuLf extends Component {
  constructor(props){
    super(props);
    this.state={
      curId:'',
      name:''
    }
  }

  handleClick = (item) => {
    const { dispatch } = this.props;
    console.log(this.props,'props')
    dispatch(chooseMenu(item.name))
    this.setState({
      curId: item.id,
      name:item.name
    });
  };
  
  render() {
    return (
      <div className="contentLf">
        <Menu className="menuBox"
          mode="inline" theme="dark"> 
          {
            this.props.menuList.map((item) =>{
                //  const curId = this.props.location.pathname.split('/')[2];
                if(item.children){
                  return <SubMenu key={item.id}
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

//export default withRouter(MenuLf);

const mapStateToProps = (state)=>{
  return {
    
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    // chooseMenu: (state) => dispatch(state),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuLf)
