import React from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";

const WelcomeText = () => {

    const [firstName, setFirstName] = React.useState("Mary");
    const [lastName, setLastName] = React.useState("Tan");

    // Define states
    React.useEffect(
        () => {
            (async () => {
                try {
                    const res = await axios.get(`http://127.0.0.1:5000/id?username=marytan`);
                    console.log(res)
                    
                    if (!res.data.error) {
                        setFirstName(res.data.firstName);
                        setLastName(res.data.lastName);
                    };
                }
                catch (err) {
                    console.log(err);
                };
            })()
        }, []);

    return (
        <>
        <Row>
            <Col>
            <h3>Welcome, {firstName + " " + lastName}</h3> 
            </Col>
        </Row>
        </>
    )
};

export default WelcomeText;