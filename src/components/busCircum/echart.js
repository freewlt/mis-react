import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react'
import axios from 'axios';

class Echart extends Component {
    state = {
        option: {},
        option2: {},
        option3: {},
    }
    pieOption = item => {
        return (
            {
                title: {
                    text: item.text,
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
                    data:item.type
                },
                color:item.color,
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
                        data:item.xdata
                    }
                ]
            }
        )
    }
    pieInit = item =>{
        const _this =this;
        axios.get('./pie.json').then((res) => {
            const option = this.pieOption(res.data.data.list)
            const option2 = this.pieOption(res.data.data.payMethodList)
            const option3 = this.pieOption(res.data.data.menmberList)
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
      // console.log(a,'a')
      // const re = Object.values(this.state)
      // console.log(re,'this.')
      //        const list = re(item=>{
      //            console.log(item)
      //       //     return (
      //       //         <ReactEcharts notMerge={true} lazyUpdate={true} option={item} />
      //       //     )
      //        })

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