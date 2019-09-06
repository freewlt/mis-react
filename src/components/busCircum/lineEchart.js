import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import './index.css'

// window.addEventListener("resize",function(){
//     // echarts.init(document.getElementById('main')).resize();
//     this.myChart.resize();
//   });

class LineEchart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.chartInt =(item)=>{
            // 初始化
            var myChart = echarts.init(document.getElementById('main'));
            this.myChart = myChart;
            // 绘制图表
            myChart.setOption({
            title: {
                text: '油品销量趋势统计',
                x:'center',
                y: 'bottom',
                textStyle:{
                    fontWeight:'normal',
                    //字体大小
            　　　　 fontSize:16
                }
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                y: 6,
                data:['92#汽油','-10柴油','95#柴油']
            },
            color:['#ffa052','#f15fa0','#81ddec'],
            grid: {
                top: 30,
                left: '2%',
                right: '2%',
                bottom: '18%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap: false,
                    data : this.props.xdata
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
                series : [
                {
                    name:'92#汽油',
                    type:'line',
                    data: this.props.ydata1
                },
                {
                    name:'-10柴油',
                    type:'line',
                    data: this.props.ydata2,
                },
                {
                    name:'95#柴油',
                    type:'line',
                    data: this.props.ydata3,
                },
            ]
            });
        }

    }

    componentDidMount() {
        this.chartInt()
    }

    render() {
        return (
            <div id="main"></div>
        );
    }
}

export default LineEchart;
//export default connect()(Echart)