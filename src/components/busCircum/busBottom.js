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
        detailOpFir:[],
        detailOpSec:[],
        detailOpThi:[],
        detailOpFor:[],
    }
    pieOption = item =>{
        let str = item.text;
        let index = str.lastIndexOf("/");
        let strRt = str.substring(index + 1, str.length);
        let strLf = str.substring(0,4);
       
        return (
            {
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge', 
                        axisLabel:{
                            distance:-155
                        },
                        radius: '100%', 
                        startAngle: 180,
                        endAngle: 0,
                        z: 3,
                        "center": ["50%", "65%"], 
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                width: 20,
                                color: item.color,
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 0,        // 属性length控制线长
                            splitNumber: 0, 
                        },
                        splitLine: {           // 分隔线
                            length: 0,         // 属性length控制线长
                       },
                       pointer: {
                            show: false,
                        },
                        title: {  
                            show: true,
                            offsetCenter: ['0', '15'],
                            textStyle: {
                                color: '#444A56',
                                fontSize: 12,
                            }
                        },
                        detail: {
                            // textStyle: {
                            //     fontSize:0,
                                offsetCenter:[0,'-12%'],
                            //     color:"#fff"
                            // },    
                            formatter: function(){
                                return `{a|${strLf}}{b|${strRt}} `;
                            },
                            rich:  {
                                a: {
                                    color: '#747474',
                                    fontWeight:'bold',
                                },
                                b: {
                                    color: '#ff4e26',
                                    fontWeight:'bold'
                                }
                            }
                        },
                        data: [{value: 50,}]
                    }
                ]
            }
        )
    }
    
    pieInit = item =>{
        const _this =this;
        axios.get('./oilTank.json').then((res) => {
            const option = this.pieOption(res.data.data.list)
            const option2 = this.pieOption(res.data.data.payMethodList)
            const option3 = this.pieOption(res.data.data.menmberList)
            const option4 = this.pieOption(res.data.data.tankList)
            _this.setState({
                'option': option,
                'option2': option2,
                'option3': option3,
                'option4':option4,
                'detailOpFir':res.data.data.list.detailList,
                'detailOpSec':res.data.data.payMethodList.detailList,
                'detailOpThi':res.data.data.menmberList.detailList,
                'detailOpFor':res.data.data.tankList.detailList,
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
    const detailFir =  this.state.detailOpFir.map(item=>{
        return (
            <span key={item.id}>{item.title}：{item.value}</span>
        )
    })
    const detailSec =  this.state.detailOpSec.map(item=>{
        return (
            <span key={item.id}>{item.title}：{item.value}</span>
        )
    })
    const detailThi =  this.state.detailOpThi.map(item=>{
        return (
            <span key={item.id}>{item.title}：{item.value}</span>
        )
    })
    const detailFor =  this.state.detailOpFor.map(item=>{
        return (
            <span key={item.id}>{item.title}：{item.value}</span>
        )
    })

    return (
      <div className="busBottom">
        <Slider className="slider"  {...settings} > 
          <div className="chartDiv">
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option} />
            <div className="detail">
               {detailFir}
            </div>
          </div>
          <div className="chartDiv">
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option2} />
            <div className="detail">
                {detailSec}
            </div>
          </div>
          <div className="chartDiv">
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option3} />
            <div className="detail">
                {detailThi}
            </div>
          </div>
          <div className="chartDiv">
            <ReactEcharts notMerge={true} lazyUpdate={true} option={this.state.option4} />
            <div className="detail">
                {detailFor}
            </div>
          </div>
          <div className="chartDiv">
            <h3>5</h3>
          </div>
          <div className="chartDiv">
            <h3>6</h3>
          </div>
          <div className="chartDiv">
            <h3>6</h3>
          </div>
          <div className="chartDiv">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default BusBottom;
