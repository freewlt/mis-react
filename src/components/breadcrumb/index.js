import React,{Component} from 'react';
import { Breadcrumb } from 'antd';
import './index.css';

class BreadCrumb extends Component {
    render(){
        return (
          <Breadcrumb separator=">" className="subTitle">
            <Breadcrumb.Item>经营状况</Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        )
    }
}

export default BreadCrumb;