import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Row, Col, Form, Input, NavLink } from "reactstrap";

function UpdateUserCard (props) {

    const { email } = useParams()

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const [state, setState] = useState({
        email: '',
        username: '',
        currentPassword : '',
        newPassword : '',
    })
    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}users/user/${email}`,{
            headers : {
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : cookies.token
            }
        }).then(res => {
            console.log(res)
            setState({
                ...state,
                email : res.data.email,
                username : res.data.username
            })
        }).catch(err => {
            navigate("/", { state : {
                message : "You do not have privileges"
            }})
        })
    }, [])

    const updateAccount = (event) => {
        event.preventDefault()
        const INPUT = {
            username : event.target.username.value,
            email : event.target.email.value,
            currentPassword : event.target.password.value,
            newPassword : event.target.newpassword.value,
        }

        console.log(INPUT, state)
    }

    const getText = (option, event) =>{
        setState({
            ...state,
            [option] : event.target.value
        })
    }

    return (
        <section className="section">
        <div className="row">
            <div className="col"></div>
            <div className="col-10">
                <Card className="shadow mt--300">
                    <CardHeader>
                        <Row>
                            <Col md='2'><NavLink href={`/admin/blogs/all`}><button className="btn btn-danger"><i className="fas fa-backward"></i></button></NavLink></Col>
                            <Col md='8'><h3 className="text-center">Edit Your Account</h3></Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={updateAccount} > 
                        <Row>
                            <Col md="2">
                                <h6 className="pt-2">Username</h6>
                            </Col>
                            <Col>
                                <Input
                                    className="form-control-alternative"
                                    placeholder={`Username`}
                                    type="username"
                                    name={`username`}
                                    value={state.username}
                                    onChange={(e) => getText("username", e)}
                                   
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="2">
                                <h6 className="pt-2">Email</h6>
                            </Col>
                            <Col>
                                <Input
                                    className="form-control-alternative"
                                    placeholder={`Email`}
                                    type="email"
                                    name={`email`}
                                    value={state.email}
                                    onChange={(e) => getText("email", e)}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="2">
                                <h6 className="pt-2">Current Password</h6>
                            </Col>
                            <Col>
                                <Input
                                    className="form-control-alternative"
                                    placeholder={`Password`}
                                    type="password"
                                    name={`password`}
                                    value={state.currentPassword}
                                    onChange={(e) => getText("currentPassword", e)}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md="2">
                                <h6 className="pt-2">New Password</h6>
                            </Col>
                            <Col>
                                <Input
                                    className="form-control-alternative"
                                    placeholder={`New Password`}
                                    type="newpassword"
                                    name={`newpassword`}
                                    value={state.newPassword}
                                    onChange={(e) => getText("newPassword", e)}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <button type="submit" className={`btn btn-outline-success btn-block`}>Update Account</button>
                        <br/>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            <div className="col"></div>
        </div>
    </section>
    )

}

export default UpdateUserCard