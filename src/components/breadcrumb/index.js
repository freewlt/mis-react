import React,{Component} from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';

import './index.css';

class BreadCrumb extends Component {
    render(){
        return (
          <Breadcrumb separator=">" className="subTitle">
          <Breadcrumb.Item>{ this.props.menuName }</Breadcrumb.Item>
            <Breadcrumb.Item>{ this.props.menuSubName }</Breadcrumb.Item>
          </Breadcrumb>
        )
    }
}

//export default BreadCrumb;
const mapStateToProps = (state)=>{
  return {
    menuName:state.menuName,
    menuSubName:state.menuSubName,
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    setIncrease: (state) => dispatch(state),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb)