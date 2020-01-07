import React, { Component, Fragment } from "react";
import CustomTabs from "../../components/tabs/customTabs";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// Table exmple pages
import TableExample from "./examples/table";
import TableDarkExample from "./examples/tableDark";
import TableStripedExample from "./examples/tableStriped";
import TableBorderedExample from "./examples/tableBordered";
import TableBorderlessExample from "./examples/tableBorderless";
import TableHoverExample from "./examples/tableHover";
import TableSizingExample from "./examples/tableSizing";
import TableResponsiveExample from "./examples/tableResponsive";

//Table exmple souece pages
import TableExampleSource from "./example-source/table";
import TableProperties from "./example-source/tableProperties";
import TableDarkExampleSource from "./example-source/tableDark";
import TableStripedExampleSource from "./example-source/tableStriped";
import TableBorderedExampleSource from "./example-source/tableBordered";
import TableBorderlessExampleSource from "./example-source/tableBorderless";
import TableHoverExampleSource from "./example-source/tableHover";
import TableSizingExampleSource from "./example-source/tableSizing";
import TableResponsiveExampleSource from "./example-source/tableResponsive";
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

import Apexchart from "react-apexcharts";
import {test1, test2, test3} from "./testData";

class regular extends Component {
   constructor(props) {
      super(props);
      this.state = {
   
      
        series1: [{
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
        series2: [{
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        }],
        series3: [{
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        }],
        
   
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
   
        }
      }
   
    }

   monthDdl = e =>{
      if(parseInt(e.target.value) == 1 ){
         this.setState({
            series1: test1,
            series2: test2,
            series3: test3
         })
      }
   };

   accountDdl = e =>{
      if(parseInt(e.target.value) == 1 ){
         console.log("treu");
      }
   };

  render() {
    return (
      <Fragment>
        <ContentHeader>Transaction History</ContentHeader>
        <ContentSubHeader>
          View your transaction history for your account
        </ContentSubHeader>
        <Row>
          <Col>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link text-muted p-0" caret>
                Account
              </DropdownToggle>
              <DropdownMenu onClick={this.accountDdl}>
               {/* Populate the header and another action values with API if have*/}
                <DropdownItem value="0">Header</DropdownItem>
                <DropdownItem value="1">Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link text-muted p-0" caret>
                Month
              </DropdownToggle>
              <DropdownMenu onClick={this.monthDdl}>
                 {/* Populate the header and another action values with API if have*/}
                <DropdownItem value="0">Header</DropdownItem>
                <DropdownItem value="1">Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
          <Card>
              <CardBody>
                <div id="wrapper">
                  <div id="chart-line">
                    <Apexchart
                      type="area"
                      height="300"
                      options={this.state.chartOptionsLine1}
                      series={this.state.series1}
                    />
                  </div>

                  <div id="chart-line2">
                    <Apexchart
                      type="area"
                      height="300"
                      options={this.state.chartOptionsLine2}
                      series={this.state.series2}
                    />
                  </div>

                  <div id="chart-area">
                    <Apexchart
                      type="area"
                      height="300"
                      options={this.state.chartOptionsArea}
                      series={this.state.series3}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle>Hoverable Rowse</CardTitle>
                <p>
                  Table with hover state on table rows, use{" "}
                  <code>&lt;Table hover&gt;</code>.
                </p>
                <CustomTabs
                  TabContent1={<TableHoverExample />}
                  TabContent2={
                    <PrismCode component="pre" className="language-javascript">
                      {TableHoverExampleSource}
                    </PrismCode>
                  }
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle>Responsive Table</CardTitle>
                <p>
                  Responsive tables allow tables to be scrolled horizontally
                  with ease. Make any table responsive across all viewports by{" "}
                  <code>&lt;Table responsive&gt;</code>.
                </p>
                <CustomTabs
                  TabContent1={<TableResponsiveExample />}
                  TabContent2={
                    <PrismCode component="pre" className="language-javascript">
                      {TableResponsiveExampleSource}
                    </PrismCode>
                  }
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default regular;
