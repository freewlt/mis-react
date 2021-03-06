import React from 'react';
import MenuLf from '../components/menuLf';
import Content from '../components/content';
import './index.css'
import axios from 'axios';

class System extends React.Component {
    constructor(props){
      super(props);
      this.state={
				menuList:[],
			}
    }
   
    render() {
        return (
            <div className="containerRt">
								<MenuLf menuList={this.state.menuList}/>
                <Content/>
            </div>
        );
		}
		
		componentDidMount(){
			const _this = this;
				axios.get('./system.json').then((res) => {
					_this.setState({ menuList: res.data.list })
				});
		}

}
export default System;