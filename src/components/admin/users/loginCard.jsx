import axios from "axios";
import { Button, Card, CardBody, CardHeader, Col, Form, Input, Row } from "reactstrap";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function LoginCard (props) {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault()
        var input = {
            email : event.target.email.value,
            password : event.target.password.value
        }
        axios.post(
            `${process.env.REACT_APP_URL}${props.props.api}`, input, {
                headers : {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin' : '*'
                    }
                }
        ).then(res =>{
            if (res.status === 200){
                setCookie('token', res.data.token, { path: '/' })
                navigate("/users/home", { state : {
                    message : "Logged in"
                }})
            } else {
                navigate("/users/signup", { state : {
                    message : "Error Occured Please Try Again"
                }})
            }
        })
    }

    const navigator = () => {
        navigate(props.props.path)
    }

    return (
        <section className="section">
        <div className="row">
            <div  className="col" ></div>
            <div  className="col-8" >
                <Card className="bg-secondary shadow border-0 mt--300">
                    <CardHeader>
                        <h4 className="text-center">{props.props.header}</h4>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={login}>
                            <Row>
                                <Col md="2"></Col>
                                <Col >
                                    <Input
                                        className="form-control-alternative"
                                        placeholder={`Email`}
                                        type="email"
                                        name={`email`}
                                    />
                                </Col>
                                <Col  md="2"></Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="2"></Col>
                                <Col >
                                    <Input
                                        className="form-control-alternative"
                                        placeholder={`Password`}
                                        type="password"
                                        name={`password`}
                                    />
                                </Col>
                                <Col  md="2"></Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="2"></Col>
                                <Col md="4">
                                <Button className="btn-outline-primary btn-block" onClick={navigator}>{props.props.button1}</Button>
                                </Col>
                                <br/>
                                <Col md="4">
                                    <Button type="submit" className="btn-outline-success btn-block">{props.props.button2}</Button>
                                </Col>
                                <Col  md="2"></Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            <div  className="col" ></div>
        </div>
    </section>
    );

}

export default LoginCard;