import React, { Component } from 'react';


class Statistic extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const statisList = this.props.recordlist.map(item=>
      <div className="list" key={item.id}>
        <img className="icon" src={item.url} alt=""/>
        <div className="dataList">
          <span>{item.title1}</span>
          <span className="data">{item.price}</span>
        </div>
        <div className="dataList">
          <span>{item.title2}</span>
          <span className="data">{item.lum}</span>
        </div>
        <div className="dataList">
          <span>{item.title3}</span>
          <span className="data">{item.num}</span>
        </div>
      </div>
      )

    return (
      <div className="statistic">
       {statisList}
      </div>
    )
  }
}

export default Statistic;