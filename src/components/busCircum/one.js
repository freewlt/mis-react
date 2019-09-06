import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import './index.css';

// window.addEventListener("resize",function(){
//   echarts.init(document.getElementById('pie1')).resize();
//   echarts.init(document.getElementById('pie2')).resize();
//   echarts.init(document.getElementById('pie3')).resize();
//   echarts.init(document.getElementById('pie4')).resize();
// });

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.chartInt =(item)=>{
      // 绘制图表
      echarts.init(document.getElementById(item.id)).setOption({
        title: {
            text: item.text,
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
                      position: 'left'
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
      });
    }

  }

  componentDidMount() {
    const newList = Object.values(this.props);
    newList.map(item=>
      this.chartInt(item)
    )
  }

  render() {
      const newList = Object.values(this.props);
      const echartList =  newList.map(item=>{
        return (
          <div id={item.id} key={item}></div>
        )
      })

      return (
          <div className="pie">
              {echartList}
          </div>
      );
  }
}

export default One;
