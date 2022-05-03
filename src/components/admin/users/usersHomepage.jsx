import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Button } from "reactstrap";

function UsersHomepageCard (props) {

    const navigate = useNavigate()


    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    
    const navigator = () => {
        axios.get(
            `${process.env.REACT_APP_URL}users/get`, {
                headers : {
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization' : cookies.token
                }
            }).then(res => {
                navigate(`/users/user/${res.data.email}`)
            })

    }

    return (
        <Row>
        <Col md="1"></Col>
        <Col>
            <Card>
                <CardHeader>
                    <h3>Users Panel</h3>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <Button className="btn-block btn-outline-primary" onClick={navigator} >{props.props.button1.title}</Button>
                        </Col>
                        <Col>
                            <Button className="btn-block btn-outline-primary" disabled onClick={navigator} >{props.props.button2.title}</Button>
                        </Col>
                    </Row>
                    <br/>
                </CardBody>
            </Card>
        </Col>
        <Col md="1"></Col>
    </Row>
    )

}

export default UsersHomepageCard;