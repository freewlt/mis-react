import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactEcharts from 'echarts-for-react'
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class BusBottom extends Component {
    state = {
        option: {},
        option2: {},
        option3: {},
        option4: {},
    }
    pieInit = item =>{
        const _this =this;
        axios.get('./pie.json').then((res) => {
            console.log(res.data.data)
            const option ={
                title: {
                    text: res.data.data.list.text,
                    x: 20,
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
                    text: res.data.data.payMethodList.text,
                    x: 20,
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
                    text: res.data.data.menmberList.text,
                    x: 20,
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
            const option4 ={
                title: {
                    text: res.data.data.tankList.text,
                    x: 20,
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
                'option4':option4,
            })
        }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount(){
        this.pieInit()
    }
  render(){

    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500
    };

    return (
      <div className="busBottom">
        <Slider className="slider"  {...settings} > 
          <div>
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option} />
          </div>
          <div>
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option2} />
          </div>
          <div>
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option3} />
          </div>
          <div>
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option4} />
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default BusBottom;
