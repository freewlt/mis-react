import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react'
import axios from 'axios';

class Echart extends Component {
    state = {
        option: {},
        option2: {},
        option3: {},
    }
    pieInit = item =>{
        const _this =this;
        axios.get('./pie.json').then((res) => {
            console.log(res.data.data)
            const option ={
                title: {
                    text: res.data.data.list.text,
                    x: 100,
                    y: 10,
                    textStyle:{
                        fontWeight:'normal',
                        fontSize:16,
                        fontColor:'#1863fd'
                    }
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    orient:'vertical',
                    x: 'right',
                    y: '14%',
                    data:res.data.data.list.type
                },
                color:res.data.data.list.color,
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['30%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:res.data.data.list.xdata
                    }
                ]
            }
            const option2 ={
                title: {
                    text: res.data.data.list.text,
                    x: 100,
                    y: 10,
                    textStyle:{
                        fontWeight:'normal',
                        fontSize:16,
                        fontColor:'#1863fd'
                    }
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    orient:'vertical',
                    x: 'right',
                    y: '14%',
                    data:res.data.data.list.type
                },
                color:res.data.data.list.color,
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['30%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:res.data.data.list.xdata
                    }
                ]
            }
            const option3 ={
                title: {
                    text: res.data.data.list.text,
                    x: 100,
                    y: 10,
                    textStyle:{
                        fontWeight:'normal',
                        fontSize:16,
                        fontColor:'#1863fd'
                    }
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    orient:'vertical',
                    x: 'right',
                    y: '14%',
                    data:res.data.data.list.type
                },
                color:res.data.data.list.color,
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['30%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:res.data.data.list.xdata
                    }
                ]
            }
            _this.setState({
                'option': option,
                'option2': option2,
                'option3': option3,
            })
        }).catch(err => {
            console.log(err)
        });
    }

  componentDidMount(){
    this.pieInit()
  }

  render() {

    // console.log(this.state,'this.state')
    //   const list = this.state(item=>{
    //       console.log(item)
    //     return (
    //       <ReactEcharts notMerge={true} lazyUpdate={true} option={item} />
    //     )
    //   })
      return (
          <div className="echarts">
              {/*{list}*/}
              <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option} />
              <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option2} />
              <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option3} />
          </div>
      );
  }
}

export default Echart;