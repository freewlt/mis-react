import React,{Component} from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux'

import './index.css';

class BreadCrumb extends Component {
    render(){
        return (
          <Breadcrumb separator=">" className="subTitle">
            <Breadcrumb.Item>经营状况{this.props.value}</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        )
    }
}

//export default BreadCrumb;
const mapStateToProps = (state)=>{
  return {
    value: state.count.number,
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    setIncrease: (state) => dispatch(state),
    setDecrease: (state) => dispatch(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb)