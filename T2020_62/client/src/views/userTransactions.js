import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import PlaceholderImg from "../assets/img/placeholder.png";
import DataTable from "react-data-table-component"
import Apexchart from "react-apexcharts";

class UserTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series1: [88.51, 26.20],
            options: {
                labels: ['Debit', 'Credit'],
                responsive: [{
                    breakpoint: 480,
                }]
            },
            series2: [{
                name:"Debit",
                data: [16.58, 30.58, 41.35]
                },
                {
                name:"Credit",
                data: [0,0,0,0,0,26.20]
                },        
            ],
            options2: {
                labels: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06'],
            }
        };
    }

    columns = [
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'Transaction Type',
            selector: 'type',
            sortable: true,
        },
        {
            name: 'Amount',
            selector: 'amount',
            sortable: true,
        },
        {
            name: 'Ref No.',
            selector: 'refId',
            sortable: true,
        },
    ];

    testData = [
        {
            date: '2018-01-01T17:00:00.000+0000',
            type: 'DEBIT',
            amount: '16.58',
            refId: '818385318 BANK FAST TRANSFER TO 975325540'
        },
        {
            date: '2018-01-02T19:00:00.000+0000',
            type: 'DEBIT',
            amount: '30.58',
            refId: '107611862 THE VERY BEST CHICKEN RICE'
        },
        {
            date: '2018-01-03T13:00:00.000+0000',
            type: 'DEBIT',
            amount: '41.35',
            refId: '630898629 CRAZY SPICY THAI FOOD'
        },
        {
            date: '2018-01-06T16:00:00.000+0000',
            type: 'CREDIT',
            amount: '26.20',
            refId: '717593923 SUBER FAST TRANSPORT PTE LTD'
        }
    ]

    BasicTable = () => (
        <DataTable title="Transaction History"
            columns={this.columns}
            data={this.testData} />
    );

    render() {
        return (
            <Fragment>
                <Row className="row-eq-height">
                    <Col sm="12" md="6" xl="12" style={{ backgroundColor: "#adadad" }} >
                        <h3>Accounts</h3>
                    </Col>
                    <Col sm="12" md="6" xl="3" >
                        <select>
                            <option>POSB Savings Account</option>
                            <option>Multi Currency Account</option>
                        </select>
                    </Col>
                    <Col sm="12" md="6" xl="12" style={{ backgroundColor: "#b8b0b0" }}>
                        <h5>Details</h5>
                    </Col>
                    <Col sm="12" md="6" xl="12" style={{ backgroundColor: "#faf5f5" }}>
                        <h6>Account No.: 491342319 </h6>
                        <h6>Type: Savings </h6>
                    </Col>
                </Row>

                <Row className="row-eq-height" style={{ backgroundColor: "#ffffff" }}>
                    <h3>Transaction History</h3>
                </Row>
                <Row className="row-eq-height" style={{ backgroundColor: "#ffffff" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        From <input type="date"></input>
                        To <input type="date"></input>
                        <input type="search" placeholder="Search"></input>
                    </div>
                </Row>
                <Row className="row-eq-height" style={{ backgroundColor: "#ffffff" }}>
                    <Col sm="12" md="6" xl="6">
                        <Card>
                            <CardBody>
                                <div id="wrapper">
                                    <div id="chart-">
                                        <Apexchart
                                            type="pie"
                                            options={this.state.options}
                                            series={this.state.series1}
                                            height='200'
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
                                            type="line"
                                            options={this.state.options2}
                                            series={this.state.series2}
                                            height='200'
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="row-eq-height">
                    <DataTable
                        highlightOnHover={true}
                        subHeader={true}
                        striped={true}
                        pagination={true}
                        columns={this.columns}
                        data={this.testData} />
                </Row>
                <Row className="row-eq-height">
                    <Col sm="12" md="6" xl="8">

                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default UserTransactions