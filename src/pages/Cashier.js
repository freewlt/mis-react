import React from 'react';
import Lt from '../components/cashierBus/left';
import Ct from '../components/cashierBus/center';
import Rt from '../components/cashierBus/right';
import './index.css'
import axios from 'axios';

class Cashier extends React.Component {
    constructor(props){
      super(props);
      this.state={
			}
    }
   
    render() {
        return (
			<div className="cashierMain">
				<div className="cashierCon">
					<Lt/>
					<Ct/>
					<Rt/>
				</div>
            </div>
        );
		}
		
		componentDidMount(){
			const _this = this;
				axios.get('./cashier.json').then((res) => {
					_this.setState({ menuList: res.data.list })
				});
		}

}
export default Cashier;