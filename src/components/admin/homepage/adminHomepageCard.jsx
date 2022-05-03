import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import AdminHomepageButton from "./adminHomepageButton";

function AdminHomepageCard (props) {

    return (
        <Row>
        <Col md="1"></Col>
        <Col>
            <Card>
                <CardHeader>
                    <h3>Admin Panel</h3>
                </CardHeader>
                <CardBody>
                    <Row>
                        <AdminHomepageButton button={props.props.button1}/>
                        <AdminHomepageButton button={props.props.button2}/>
                    </Row>
                    <br/>
                    <Row>
                        <AdminHomepageButton button={props.props.button3}/>
                        <AdminHomepageButton button={props.props.button4}/>
                    </Row>
                </CardBody>
            </Card>
        </Col>
        <Col md="1"></Col>
    </Row>
    )

}

export default AdminHomepageCard;