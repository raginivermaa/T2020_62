// import external modules
import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Button,
  Label,
  Card,
  CardBody,
  CardFooter
} from "reactstrap";
import axios from "axios";
import Logo from "../../assets/img/dbs_logo.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: true,
      loginEmail: "",
      loginPassword: "",
      persons: [],
      showPassword: false
    };
  }

  handleChecked = e => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }));
  };

  loginClick = e => {
    if (
      this.state.loginEmail === "marytan" &&
      this.state.loginPassword === "1234567"
    ) {

      (async () => {
        try {
          const res = await axios.get(`http://127.0.0.1:5000/id?username=marytan`);
          console.log(res)
        } catch (err) {};
      })();

      this.props.history.push("/analytics-dashboard");

    } else if (this.state.loginEmail === "" || this.state.loginPassword === "") {
      alert("Missing login information.");
    } else if (this.state.loginEmail !== "marytan") {
      alert("Incorrect username.");
    } else if (this.state.loginPassword !== "1234567") {
      alert("Incorrect password.");
    }
  };

  handleEmailChange = e => {
    this.setState({ loginEmail: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ loginPassword: e.target.value });
  };

  //API call
  async componentDidMount() {
    try {
      axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    if (this.state.persons.length > 0) {
      console.log(this.state.persons[0]);
    }
    return (
      <div className="container">
        <Row className="full-height-vh">
          <Col
            xs="12"
            className="d-flex align-items-center justify-content-center"
          >
            <Card className="gradient-primary text-center width-400">
              <CardBody>
                <img src={Logo} height="42px" width="100px" alt="logo"></img>
                <h3 className="black py-4">Login</h3>
                <Form className="pt-2">
                  <FormGroup>
                    <Col md="12">
                      <Input
                        onChange={this.handleEmailChange}
                        type="email"
                        className="form-control"
                        name="inputEmail"
                        id="inputEmail"
                        placeholder="Username"
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md="12">
                      <Input
                      onChange={this.handlePasswordChange}
                      type="password"
                      className="form-control"
                      name="inputPass"
                      id="inputPass"
                      placeholder="Password"
                      required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col md="12">
                        <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0 ml-3">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            checked={this.state.isChecked}
                            onChange={this.handleChecked}
                            id="rememberme"
                          />
                          <Label
                            className="custom-control-label float-left black"
                            for="rememberme"
                          >
                            <p>Remember Me</p>
                          </Label>
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Col md="12">
                      <Button
                        color="primary"
                        block
                        className="btn-blue btn-raised"
                        onClick={this.loginClick}
                      >
                        Submit
                      </Button>
                      <Button
                        type="button"
                        color="secondary"
                        block
                        className="btn-danger"
                      >
                        Cancel
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <div className="float-left">
                  <NavLink to="/pages/forgot-password" className="text-white">
                    Forgot Password?
                  </NavLink>
                </div>
                <div className="float-right">
                  <NavLink to="/pages/register" className="text-white">
                    Register Now
                  </NavLink>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;