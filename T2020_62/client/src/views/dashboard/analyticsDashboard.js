import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import Apexchart from "react-apexcharts";
import { sgconsumerseries, sgconsumerpriceseries, sgyearprice } from "../charts/echartjs/agedeathData";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg from "../../assets/img/banner1.png";
import PlaceholderImg from "../../assets/img/placeholder.png";
import { Link } from "react-router-dom";

import WelcomeText from "./welcomeHeader/WelcomeText";

class AnalyticsDashboard extends Component {
  cardClicked(val) {
    switch (val) {
      case 1:
        this.setState({
          series1: sgconsumerseries,
          series2: sgconsumerpriceseries,
          series3: sgyearprice,
        })
        break;
      case 2:
        alert("2");
        break;
      case 3:
        alert("3");
        break;
      case 4:
        alert("4");
        break;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      series1: [20, 30, 50],
      options: {
        labels: ['Groceries', 'Food', 'Transport'],
        responsive: [{
          breakpoint: 480,
        }]
      },
      series2: [{
        data: [900, 500, 600, 700]
      }],
      options2: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      }
    };
  }

  render() {
    return (
      <Fragment>
        <WelcomeText />
        <Row className="row-eq-height">
          <Col>
            <Carousel>
              <div onClick=''>
                <img src = {BannerImg} />
                <p>Cashback with DBS new credit card!</p>
              </div>
              <div>
                <img src = {PlaceholderImg} />
                <p>GoJek Voucher with DBS card!</p>
              </div>
              <div>
                <img src = {PlaceholderImg} />
                <p>Grab discount with PayLah!</p>
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row className="row-eq-height">
          <Col sm="12" md="6" xl="6">
            <h3><Link to="userTransactions">Total Expenditure by Month</Link></h3>
          </Col> 
          <Col sm="12" md="6" xl="6">
            <h3><Link to="userTransactions">This Month's Expenditure</Link></h3>
            </Col>
        </Row>
        <Row className="row-eq-height">
        <Col sm="12" md="6" xl="6">
            <Card>
              <CardBody>
                <div id="wrapper">
                  <div id="chart-">
                    <Apexchart
                      type="bar"
                      options={this.state.options2}
                      series={this.state.series2}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" xl="6">
            <Card>
              <CardBody>
                <div id="wrapper">
                  <div id="chart-">
                    <Apexchart
                      type="pie"
                      options={this.state.options}
                      series={this.state.series1}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default AnalyticsDashboard;
