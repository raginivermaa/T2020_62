import ReactEcharts from "echarts-for-react";
import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
//import { populationDataFemale } from "./DataFemale";
//import { populationDataMale } from "./DataMale";
import { deathData } from "./deathData";
import { sunburstData } from "./sunburstData";
import Apexchart from "react-apexcharts";
import { sgdeathseries, sg100kseries, ukdeathseries, uk100kseries, sgconsumerseries, ukconsumerseries, sgconsumerpriceseries, ukconsumerpriceseries, sgyearprice, ukyearprice, sgctystackseries, ukctystackseries, sgdeaths, mydeaths, myndeaths, phdeaths, thdeaths, vndeaths } from "./agedeathData";


class echart extends Component {


  plcoptionholder = [];
  country = "";
  checkcountry = "";

  constructor(props) {
    super(props);
    this.state = {

      ctydeathseries: [{
        name: 'Placeholder',
        data: [0, 0, 0, 0, 0]
      }, {
        name: 'Placeholder',
        data: [0, 0, 0, 0, 0]
      }, {
        name: 'Placeholder',
        data: [0, 0, 0, 0, 0]
      }
      ],

      cty100kseries: [{
        name: 'Placeholder',
        data: [0, 0, 0, 0, 0]
      }, {
        name: 'Placeholder',
        data: [0, 0, 0, 0, 0]
      }, {
        name: 'Placeholder',
        data: [0, 0, 0, 0, 0]
      }
      ],
      consumeseries: [{
        name: 'Placeholder',
        type: 'column',
        data: [0, 0, 0, 0],

        //color: "#00BCD4"
      }, {
        name: 'Placeholder',
        type: 'line',
        data: [0, 0, 0, 0],
        //color: "#FF7181"
      }],

      ctydeathoptions: {
        chart: {
          stacked: true,
          toolbar: {
            show: true,
          }
        },
        tooltip: {
          enabled: true,
          onDatasetHover: {
            highlightDataSeries: true,
          },
          x: {
            show: true,
            format: 'yyyy',
          },
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        colors: ['#616161', '#FFA000', '#BDBDBD'],
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            endingShape: 'rounded',
            horizontal: false,
          },
        },
        //colors: ["#00BCD4", "#FF7181"],
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2013', '01/01/2014', '01/01/2015', '01/01/2016', '01/01/2017'],
          //labels: ['2013', '2014', '2015', '2016', '2017']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },

      cty100koptions: {
        chart: {
          stacked: true,
          toolbar: {
            show: true,
          },

          zoom: {
            enabled: true
          }
        },
        colors: ['#616161', '#FFA000', '#BDBDBD'],
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        dataLabels: {
          enabled: true
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            endingShape: 'rounded',
            horizontal: false,
          },
        },
        tooltip: {
          enabled: true,
          onDatasetHover: {
            highlightDataSeries: true,
          },
          x: {
            show: true,
            format: 'yyyy',
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2013', '01/01/2014', '01/01/2015', '01/01/2016', '01/01/2017']
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },
      consumeoptions: {
        stroke: {
          width: [0, 4],

        },
        colors: ["#00BCD4", "#FF7181"],
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },


        xaxis: {
          type: 'category',
          categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

        },
        yaxis: [{
          title: {
            text: 'Cigarettes Per Smoker Per Day',

          },

        }, {
          opposite: true,
          title: {
            text: 'Price of 20-Pack of Cigarettes (US$)',

          }
        }],
        chart: {

        },
      },

      series1: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      }],
      series2: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      }],
      series3: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      }],
      /*
            newseries1: [{
              data: [19.8, 19.4, 18.9, 18.5, 18.1, 17.8, 17.5, 17.3, 17.0]
            }],
            newseries2: [{
              data: [7.36, 7.73, 8.12, 8.45, 8.84, 9.16, 9.36, 9.87, 10.21],
            }],
            newseries3: [{
              data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            }],
      
            */

      chartOptionsLine1: {
        chart: {
          id: 'tw',
          group: 'social',
        },
        title: {
          text: 'Average Cigarettes Per Smoker Per Day',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },

        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },
        colors: ['#5C6BC0'],
      },
      chartOptionsLine2: {
        chart: {
          id: 'tw',
          group: 'social',
        },
        title: {
          text: 'Average Price of a 20-Pack of Cigarettes (US$)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },

        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },
        colors: ['#00BCD4'],

      },
      chartOptionsArea: {
        chart: {
          id: 'yt',
          group: 'social',
        },
        title: {
          text: 'Average Amount of Money Spent on Cigarettes Per Year in (US$)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },
        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },

        colors: ['#E53935'],
        //colors: ['#00E396'],

      },

      ctystackOptions: {
        chart: {
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },

        },
        colors: ['#FFA000', '#BDBDBD'],
        stroke: {
          width: 1,
          colors: ['#fff']
        },

        title: {
          //text: 'Fiction Books Sales'
        },
        xaxis: {
          categories: ['Singapore', 'Malaysia', 'Myanmar', 'Philippines', 'Thailand', 'Vietnam'],
          //categories: ['Singapore', 'Malaysia', 'Myanmar', 'Philippines', 'Thailand', 'Vietnam']
          labels: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },
        fill: {
          opacity: 1

        },

        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },


      plcoptions: {
        chart: {

          stacked: true,
        },
        plotOptions: {
          bar: {
            endingShape: 'rounded',
            horizontal: true,
          },

        },
        colors: ['#FFA000', '#BDBDBD'],
        stroke: {
          width: 1,
          colors: ['#fff']
        },

        title: {
          //text: 'Fiction Books Sales'
        },
        xaxis: {
          categories: ['Singapore', 'Malaysia', 'Myanmar', 'Philippines', 'Thailand', 'Vietnam'],
          //categories: ['Singapore', 'Malaysia', 'Myanmar', 'Philippines', 'Thailand', 'Vietnam']
          labels: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },
        fill: {
          opacity: 1

        },

        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
      plcseries: [{
        name: 'Female',
        data: [0, 0, 0, 0, 0, 0]
      }, {
        name: 'Male',
        data: [0, 0, 0, 0, 0, 0]
      }
      ],


      compareOptions1: {
        chart: {
          id: 'tw',
          group: 'compare',
        },
        title: {
          text: 'Deaths Attributed to Smoking in Singapore (%)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],

        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },

        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },
        //colors: ['#5C6BC0'],
        colors:['#E53935'],
      },
      compareOptions2: {
        chart: {
          id: 'tw',
          group: 'compare',
        },
        title: {
          text: 'Deaths Attributed to Smoking in Malaysia (%)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],

        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },

        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },
        colors: ['#5C6BC0'],

      },
      compareOptions3: {
        chart: {
          id: 'yt',
          group: 'compare',
        },
        title: {
          text: 'Deaths Attributed to Smoking in Myanmar (%)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],

        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },
        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },

        colors: ['#8BC34A'],
        //colors: ['#00E396'],

      },
      compareOptions4: {
        chart: {
          id: 'tw',
          group: 'compare',
        },
        title: {
          text: 'Deaths Attributed to Smoking in Philippines (%)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],

        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },
        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },
        colors: ['#283593'],
      },
      compareOptions5: {
        chart: {
          id: 'tw',
          group: 'compare',
        },
        title: {
          text: 'Deaths Attributed to Smoking in Thailand (%)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],

        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },

        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },
        colors: ['#FFC107'],

      },
      compareOptions6: {
        chart: {
          id: 'yt',
          group: 'compare',
        },
        title: {
          text: 'Deaths Attributed to Smoking in Singapore Vietnam (%)',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
          
        },
        yaxis: {
          show: false,
          axisTicks: {
            show: false
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "%"
            }
          }
        },
        markers: {
          size: 6,
          hover: {
            size: 10
          }
        },

        colors: ['#6A1B9A'],
        //colors: ['#00E396'],

      },

      ctyseries1: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }],
      ctyseries2: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }],
      ctyseries3: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }],
      ctyseries4: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }],
      ctyseries5: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }],
      ctyseries6: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }],




    }

  }


  getSunBurstOption = () => {
    //console.log(sunburstData)

    return {


      baseOption: {
        title: {
          //text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
          //subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
          textStyle: {
            fontSize: 14,
            align: 'center'
          },
          subtextStyle: {
            align: 'center'
          },
          //sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
        },
        series: {
          type: 'sunburst',
          highlightPolicy: 'ancestor',
          data: sunburstData,
          radius: [5, '95%'],
          sort: null,
          label: {
            rotate: 'radial'
          },
          itemStyle: {
            borderWidth: 1
          }

        },
        tooltip: {
          show: true // include tooltip component for the feature
        },
        /* toolbox: {
           show: true,
           showTitle: false, // hide the default text so they don't overlap each other
           feature: {
             saveAsImage: {
               show: true,
               title: 'Save As Image'
             },
             dataView: {
               show: false,
               title: 'Data View'
             },
           },
         },*/
      },
    };
    //console.log(sunburstData)
  };

  getRCOption = () => {
    let i = 0;
    let j = 0;
    let alldata = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    let districts = [];
    let years = [];
    Object.entries(deathData).forEach(entry => {
      years = [...years, entry[0]];
      //console.log(entry[1][0]);

      console.log();
      entry[1].forEach(e => {
        districts = [...new Set([...districts, e.name])];
        alldata[j][i] = e.name;
        i++;
        if (i == 10) {
          i = 0;
        }

        console.log(deathData.name);
        //console.log([deathData.itemStyle]);
      });
      j++;
    });


    let options = years.map(year => {
      let obj = {};
      obj.title = {
        text: `Number of Deaths By Risk Factor in the World, ${year}`
      };
      obj.series = [
        {
          data: deathData[year]
        }
      ];
      return obj;
    });


    return {
      baseOption: {
        timeline: {
          autoPlay: true,
          axisType: "category",
          bottom: 20,
          data: years,
          height: null,
          inverse: true,
          left: null,
          orient: "vertical",
          playInterval: 1000,
          right: 0,
          top: 20,
          width: 55,
          grid: {
            containLabel: true
          },
          label: {
            normal: {
              show: true,
              position: 'insideRight',
              textStyle: {
                color: "#aaa"
              }
            },
            emphasis: {
              textStyle: {
                color: "#333"
              }
            }
          },
          symbol: "none",
          lineStyle: {
            color: "#aaa"
          },
          checkpointStyle: {
            color: "#354EF6",
            borderColor: "transparent",
            borderWidth: 2
          },
          controlStyle: {
            showNextBtn: false,
            showPrevBtn: false,
            normal: {
              color: "#354EF6",
              borderColor: "#354EF6"
            },
            emphasis: {
              color: "#5d71f7",
              borderColor: "#5d71f7"
            }
          }
        },
        color: [deathData.itemStyle],
        //color: ["#e91e63 ", "#354EF6"],
        title: {
          subtext: "Data from ourworldindata.org",
          textAlign: "left",
          left: "5%"
        },
        tooltip: { backgroundColor: "#555", borderWidth: 0, padding: 10 },
        legend: {
          data: ["Deaths", "Male"],
          itemGap: 35,
          itemHeight: 18,
          right: "11%",
          top: 20
        },
        calculable: true,
        grid: {
          containLabel: true,
          //top: 100,
          //bottom: 150,
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              label: {
                show: true,
                position: 'insideRight',
                formatter: function (params) {
                  return params.value.replace("\n", "");
                }
              }
            }
          }
        },
        xAxis: [
          {
            axisLabel: {
              interval: 0,
              rotate: 55,
              textStyle: {
                baseline: "top",
                color: "#333",
                fontSize: 10,
                fontWeight: "bold"
              }
            },
            axisLine: { lineStyle: { color: "#aaa" }, show: true },
            axisTick: { show: false },
            roundCap: true,
            //data: alldata[0],
            splitLine: { show: false },
            type: "value"
          }
        ],
        yAxis: [
          {
            axisLabel: {
              show: false,
              //textStyle: { fontSize: 10 }
            },
            axisLine: { show: false },
            axisTick: { show: false },
            //data: names,
            data: alldata[0],
            //name: "Factors of Death",
            splitLine: {
              lineStyle: {
                type: "dotted"
              }
            },
            type: "category"
          }
        ],
        series: [{
          //name: "Deaths", 
          type: "bar",
          roundCap: true,
          label: {
            normal: {
              show: true,
              formatter: '{b}',
              position: 'insideRight'
            }
          }
        }]
      },
      options: options
    };
  };

  onSunBurstChartClick = (params) => {
    //console.log name of segment selected
    //console.log(params.data.name)
    this.checkcountry = params.data.name
    if (this.checkcountry != "" && this.checkcountry != undefined && this.checkcountry != "Asia" && this.checkcountry != "East Asia" && this.checkcountry != "South-East Asia" && this.checkcountry != "West Asia" && this.checkcountry != "Europe" && this.checkcountry != "West Europe" && this.checkcountry != "North Europe" && this.checkcountry != "East Europe" && this.checkcountry != "America" && this.checkcountry != "North America" && this.checkcountry != "South America" && this.checkcountry != "Africa" && this.checkcountry != "North Africa" && this.checkcountry != "Central Africa") {
      this.country = params.data.name
    }

    if (this.country == "Singapore") {
      this.setState({
        ctydeathseries: sgdeathseries,
        cty100kseries: sg100kseries,
        series1: sgconsumerseries,
        series2: sgconsumerpriceseries,
        series3: sgyearprice,
        plcseries: sgctystackseries,
        //plcoptionholder: ['Singapore', 'Malaysia', 'Myanmar', 'Philippines', 'Thailand', 'Vietnam']
        ctyseries1: sgdeaths,
        ctyseries2: mydeaths,
        ctyseries3: myndeaths,
        ctyseries4: phdeaths,
        ctyseries5: thdeaths,
        ctyseries6: vndeaths,

        //updateSeries()
      })
      //chart.updateSeries()
    }
    if (this.country == "United Kingdom") {
      this.setState({
        ctydeathseries: ukdeathseries,
        cty100kseries: uk100kseries,
        series1: ukconsumerseries,
        series2: ukconsumerpriceseries,
        series3: ukyearprice,
        plcseries: ukctystackseries,
        //updateSeries()


      })
      //chart.updateSeries()
    }

    //ApexChart.exec(document.querySelector("#chart"), 'updateSeries', this.state.genseries,true)
  };

  _onEvents = {
    'click': this.onSunBurstChartClick,
    'dataZoom': this.onDataZoom,
  };




  render() {
    return (
      <Fragment>
        <Col sm="12">
          <Card>
            <CardBody>
              <ReactEcharts
                option={this.getRCOption()}
                style={{ height: "80vh" }}
                opts={{ renderer: "svg" }}
              />
            </CardBody>
          </Card>
        </Col>

        <Row className="row-eq-height">
          <Col sm="5">
            <Card>
              <CardHeader>
                <CardTitle>Country Selector</CardTitle>
              </CardHeader>
              <CardBody>
                <ReactEcharts
                  id="sunburst"
                  option={this.getSunBurstOption()}
                  style={{ height: "70vh" }}
                  opts={{ renderer: "svg" }}
                  ref={(e) => { this.echarts_react = e; }}
                  onEvents={this._onEvents}
                />
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" lg="6" xl="7">
            <Card>

              <CardBody>
                <div id="wrapper">
                  <div id="chart-line">
                    <Apexchart type="area" height="200" options={this.state.chartOptionsLine1} series={this.state.series1} />
                  </div>

                  <div id="chart-line2">
                    <Apexchart type="area" height="200" options={this.state.chartOptionsLine2} series={this.state.series2} />
                  </div>

                  <div id="chart-area">
                    <Apexchart type="area" height="200" options={this.state.chartOptionsArea} series={this.state.series3} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="row-eq-height">
          <Col sm="12" lg="6" xl="6">
            <Card>
              <CardHeader><CardTitle>Number of Deaths Per 100k Capita from Smoking in {this.country}</CardTitle></CardHeader>
              <CardBody>
                <div id="chart">
                  <Apexchart options={this.state.cty100koptions} series={this.state.cty100kseries} type="bar" width="650" />
                </div>

              </CardBody>
            </Card>
          </Col>
          <Col sm="12" lg="6" xl="6">
            <Card>
              <CardHeader><CardTitle>Smoking Prevalance of Neighbouring Countries</CardTitle></CardHeader>
              <CardBody>

                <div id="chart">
                  <Apexchart options={this.state.plcoptions} series={this.state.plcseries} type="bar" height="400" />
                </div>

              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="row-eq-height">
          <Col sm="12" lg="6" xl="6">
            <Card>

              <CardBody>
                <div id="wrapper">
                  <div id="chart-line1">
                    <Apexchart type="area" height="200" options={this.state.compareOptions1} series={this.state.ctyseries1} />
                  </div>

                  <div id="chart-line2">
                    <Apexchart type="area" height="200" options={this.state.compareOptions2} series={this.state.ctyseries2} />
                  </div>

                  <div id="chart-area3">
                    <Apexchart type="area" height="200" options={this.state.compareOptions3} series={this.state.ctyseries3} />
                  </div>
                </div>

              </CardBody>
            </Card>
          </Col>
          <Col sm="12" lg="6" xl="6">
            <Card>

              <CardBody>

                <div id="chart-line4">
                  <Apexchart type="area" height="200" options={this.state.compareOptions4} series={this.state.ctyseries4} />
                </div>

                <div id="chart-line5">
                  <Apexchart type="area" height="200" options={this.state.compareOptions5} series={this.state.ctyseries5} />
                </div>

                <div id="chart-area">
                  <Apexchart type="area" height="200" options={this.state.compareOptions6} series={this.state.ctyseries6} />
                </div>
              </CardBody>
            </Card>

          </Col>
        </Row>
      </Fragment>



    );
  }
}
export default echart;