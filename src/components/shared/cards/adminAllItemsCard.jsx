import axios from "axios";
import React, { useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { CardBody, CardHeader, Card, Row, Col, NavLink } from 'reactstrap';

function AdminAllItemsCard(props){

    const [projectsList, setState] = useState([])

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    

    const deleteDBRow = (id) => {
        // axios.delete(`${process.env.REACT_APP_URL}${props.props.api_option}/${id}`).then(res => {
        //     console.log(res)
        // })
        axios.delete(`${process.env.REACT_APP_URL}${props.props.api_option}/${id}`, {
            headers : {
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : cookies.token
            }
        } 
        
        )
        .then(res=>{

        })
        .catch(err=>{
            ;
        })
    }


    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL}${props.props.api_option}/all`)
          .then(res=>{
            setState(res.data)
          })
          .catch(err=>{
            console.log(err);
          })
     },[])

     const projects = projectsList.map((data, id) => {
        return  <React.Fragment>
                    <Row>
                        <Col>
                            <div class="card bg-primary">
                                <div class="card-body text-white">
                                    <Row>
                                        <Col md='8'><h3 className="text-white">{data.title}</h3></Col>
                                        <Col md='2'><NavLink  href={`/admin/${props.props.api_option}/${data.id}/edit`}><button className="btn btn-outline-secondary text-white"><i className="fas fa-edit"></i></button></NavLink></Col>
                                        <Col md='2'><button className="btn btn-outline-danger" onclick={deleteDBRow(data.id)}><i className="fas fa-trash"></i></button></Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                </React.Fragment>
    })

    return (
        <section className="section">
            <div className="row">
                <div className="col"></div>
                <div className="col-10">
                    <Card className="shadow mt--300">
                        <CardHeader>
                            <Row>
                                <Col md='2'><NavLink href={`/admin/home`}><button className="btn btn-outline-danger"><i className="fas fa-backward"></i></button></NavLink></Col>
                                <Col md='8'><h3 className="text-center">{props.props.card_header}</h3></Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            {projects}
                            <Row>
                                <Col>
                                <NavLink href={`/admin/${props.props.api_option}/create`}><button className={`btn btn-outline-primary btn-block`}>{`Create new ${props.props.api_option}`}</button></NavLink>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
                <div className="col"></div>
            </div>
        </section>
    );

}

export default AdminAllItemsCard;