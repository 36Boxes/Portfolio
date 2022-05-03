import axios from "axios";
import React, { useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CardBody, CardHeader, Card, Row, Col, NavLink, Table, Media, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

function AdminAllBlogsCard(props){

    const [projectsList, setState] = useState([])

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const deleteDBRow = (id) => {
        axios.delete(`${process.env.REACT_APP_URL}${props.props.api_option}/${id}`, {
            headers : {
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : cookies.token
            }
        } 
        
        ).then(res => {
          navigate("/admin/blogs/all", { state : {
            message : `Blog Post Deleted`
        }})

        // This line refreshes the page so we can see the message
        window.location.reload(false)
        }).catch(res => {
          navigate("/admin/blogs/all", { state : {
            message : `Blog Post NOT Deleted`
        }})
        window.location.reload(false)
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
                    <tr>
                        <th scope="row">
                            <Media>
                                <span className="mb-0 text-sm">
                                    {data.title}
                                </span>
                            </Media>
                        </th>
                        <th scope="row">
                            <Media>
                                <span className="mb-0 text-sm">
                                    {data.author}
                                </span>
                            </Media>
                        </th>
                        <th scope="row">
                            <Media>
                                <span className="mb-0 text-sm">
                                    {data.created_at}
                                </span>
                            </Media>
                        </th>
                        <td className="text-center">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-primary"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => {e.preventDefault(); console.log(projectsList)}}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href={`/admin/blogs/${data.id}/edit`}
                    >
                      Edit Blog Post
                    </DropdownItem>
                    <DropdownItem
                      href="/"
                      onClick={e => {e.preventDefault(); deleteDBRow(data.id)}}
                    >
                      Delete Blog Post
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
                    </tr>
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
                            <Table>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Blog Title</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects}
                                </tbody>
                            </Table>
                            <Row>
                                <Col>
                                <NavLink href={`/admin/${props.props.api_option}/create`}><button className={`btn btn-outline-primary btn-block`}>{`Create new Blog Post`}</button></NavLink>
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

export default AdminAllBlogsCard;