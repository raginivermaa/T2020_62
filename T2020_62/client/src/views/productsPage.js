import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import PlaceholderImg from "../assets/img/placeholder.png";

class ProductsPage extends Component{


    render(){
        return (
            <Fragment>
                <Row className="row-eq-height">
                    <Col sm="12" md="6" xl="3">
                        <img src={PlaceholderImg} />
                    </Col>
                    <Col sm="12" md="6" xl="3">
                        <img src={PlaceholderImg} />
                    </Col>
                    <Col sm="12" md="6" xl="3">
                        <img src={PlaceholderImg} />
                    </Col>
                    <Col sm="12" md="6" xl="3">
                        <img src={PlaceholderImg} />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default ProductsPage