import axios from "axios";
import React, { useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CardBody, CardHeader, Card, Row, Col, NavLink } from 'reactstrap';
import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Progress,
    Table,
    UncontrolledTooltip
  } from "reactstrap";


function AllUsersCard (props) {

    const [projectsList, setState] = useState([])

    const navigate = useNavigate()

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

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL}${props.props.api_option}/all`,{
          headers : {
              'Access-Control-Allow-Origin' : '*',
              'Authorization' : cookies.token
          }
      })
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
                                    {data.username}
                                </span>
                            </Media>
                        </th>
                        <th scope="row">
                            <Media>
                                <span className="mb-0 text-sm">
                                    {data.email}
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
                        <td className="text-right">
                        <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-icon-only text-primary"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color=""
                    onClick={e => {e.preventDefault()}}
                  >
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                      href={`/admin/user/${data.id}/edit`}
                    >
                      Edit User
                    </DropdownItem>
                    <DropdownItem
                      href="/"
                      onClick={e => {e.preventDefault(); deleteDBRow(data.id)}}
                    >
                      Delete User
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
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects}
                                </tbody>
                            </Table>

                        </CardBody>
                    </Card>
                </div>
                <div className="col"></div>
            </div>
        </section>
    );

}

export default AllUsersCard;