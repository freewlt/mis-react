import React from 'react';
import MenuLf from '../components/menuLf';
import ContentRt from '../components/contentRt';
import './index.css'
import axios from 'axios';

class Manage extends React.Component {
    constructor(props){
      super(props);
      this.state={
				menuList:[],
			}
    }
   
    render() {
        return (
            <div className="content">
								<MenuLf menuList={this.state.menuList}/>
								<ContentRt/>
            </div>
        );
		}
		
		componentDidMount(){
			const _this = this;
				axios.get('./menuLf.json').then((res) => {
					_this.setState({ menuList: res.data.list })
				});
		}

}
export default Manage;