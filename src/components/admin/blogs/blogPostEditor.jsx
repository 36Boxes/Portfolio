import React from "react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardBody, CardHeader, Row, Col, Container, Form, Input, NavLink } from "reactstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from "axios";


function BlogPostEditor (props) {

    const [state, setState] = useState({
        title: '',
        post: ''
    })

    const navigate = useNavigate();

    const { project_id } = useParams()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {
        if (project_id === undefined){
            

        } else {
            axios.get(`${process.env.REACT_APP_URL}blogs/${project_id}`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                    },
                }).then(res => {
                    

                    // If the response is empty its not an edit so go to the create page

                    if (res.data.length === 0){

                        navigate("/admin/blogs/create")

                    } else {

                        setState({
                            title: res.data[0].title,
                            post : res.data[0].post
                        })
                    }
            })
        }
    }, [])

    const fileHandler = (event, option) => {
        var fd = new FormData();
        fd.append("image", event.target.files[0])
        axios.post(
            `${process.env.REACT_APP_URL}image/upload`,
            fd,{
            headers : {
                'Content-Type' : 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*',
                'Authorization' : cookies.token
                }
            }
        ).then(res => {
            setState({
                ...state,
                [option] : res.data
            })
        })
    }

    const CreateBlogPost = (event) => {
        event.preventDefault()
        if (project_id === undefined){
            const req_body = {
                title : event.target.title.value,
                post : state.post
            }
        
            axios.post(
                `${process.env.REACT_APP_URL}blogs/create`,
                req_body,{
                headers : {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization' : cookies.token
                    }
                }
            ).then(res => {
                setState({
                    ...state,
                    title : res.data.title,
                    post : res.data.post
                })
                navigate(`/admin/blogs/${res.data.ID}/edit`)
            })
        } else {
            const req_body = {
                title : event.target.title.value,
                post : state.post
            }
            axios.put(
                `${process.env.REACT_APP_URL}blogs/${project_id}`,
                req_body,{
                headers : {
                    'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization' : cookies.token
                    }
                }
            ).then(res => {
                setState({
                    ...state,
                    title : res.data.title,
                    post : res.data.post
                })
                navigate(`/admin/blogs/${project_id}/edit`)
            })
        }
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
                                <Col md='8'><h3 className="text-center">Edit A Blog Post</h3></Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={CreateBlogPost}> 
                            <Row>
                                <Col md="2">
                                    <h6 className="pt-2">Blog Title</h6>
                                </Col>
                                <Col>
                                    <Input
                                        className="form-control-alternative"
                                        placeholder={`Enter the blog post title`}
                                        type="title"
                                        name={`title`}
                                        value={state.title}
                                        onChange={
                                            (e) => {setState({...state, title : e.target.value})}
                                        }
                                    />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col md="2">
                                    <h6 className="pt-2">Photo 1</h6>
                                </Col>
                                <Col>
                                    <div className='btn btn-primary btn-block'>
                                        <input type='file' id='single' onChange={(e) => fileHandler(e, "filePath1")}/>
                                        <i class="far fa-image"></i>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="2">
                                    <h6 className="pt-2">Photo 1 Preview</h6>
                                </Col>
                                <Col>
                                    <Container className="text-center">
                                        <img alt="..." src={`${process.env.REACT_APP_URL}` + state.filePath1 } height={200} width={200}/>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="2">
                                    <h6 className="pt-2">Photo 2</h6>
                                </Col>
                                <Col>
                                    <div className='btn btn-primary btn-block'>
                                        <input type='file' id='single' onChange={(e) => fileHandler(e, "filePath2")}/>
                                        <i class="far fa-image"></i>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="2">
                                    <h6 className="pt-2">Photo 2 Preview</h6>
                                </Col>
                                <Col>
                                    <Container className="text-center">
                                        <img alt="..." src={`${process.env.REACT_APP_URL}` + state.filePath2 } height={200} width={200}/>
                                    </Container>
                                </Col>
                            </Row>
                            <div class="BlogPostEditor">
                                <textarea className="blogTextEditor" autoFocus value={state.post} 
                                    onChange={
                                        (e) => {setState({...state, post : e.target.value})}
                                    }
                                />
                                <ReactMarkdown className="markdownEditor" children={state.post}/>
                            </div>
                            <br/>
                            <button type="submit" className={`btn btn-outline-success btn-block`}>Upload Blog Post</button>
                            <br/>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
                <div className="col"></div>
            </div>
        </section>
    );

}
  

export default BlogPostEditor;