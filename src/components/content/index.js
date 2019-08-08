import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Breadcrumb from '../breadcrumb';
import Management from '../manage/management';
import Cash from '../manage/cash';


import Casheng from '../cashier/casheng';
import './index.css';


class content extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render() {

    return (
      <div className="content">
      
        <Breadcrumb/>
        <Route path="/manage/" exact component={Management}></Route>
        <Route path="/manage/management" exact component={Management}></Route>
        <Route path="/manage/cash" exact component={Cash}></Route>

        <Route path="/cashier/" exact component={Casheng}></Route>
        <Route path="/cashier/casheng" exact component={Casheng}></Route>
       
      </div>
    );
  }
}

export default content

// const mapStateToProps =(state) => {
//   return {

//   }
// }
// const mapDispathToProps = (dispatch) =>{
//   return {

//   }
// }
// export default connect(mapStateToProps,mapDispathToProps)(content);