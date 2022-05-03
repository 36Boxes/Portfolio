import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import FeaturedPost from "./featuredPost";


const BlogPostList = (props) => {

    const navigate = useNavigate()

    const [blogList, setState] = useState([])

    useEffect(() => {
        axios.get(
            `${process.env.REACT_APP_URL}blogs/all`, {
                headers : {
                    'Access-Control-Allow-Origin' : '*'
                }
            }).then(res=>{
                setState(res.data)
              })
    }, [])

    const blogs = blogList.map((data, id) => {
        return  <Col xl="4" className="pt-5 pb-3">
                    <a href={`/blogs/${data.id}`}>
                        <Card className="bg-primary card-lift--hover" style={{ height: "10rem" }}>
                            <br/>
                            <CardBody className="text-white text-center">
                                <strong>{data.title}</strong>
                            </CardBody>
                        </Card>
                    </a>
                </Col>
    })

    return (
        <Row>
            {blogs}
        </Row>
    );

};

export default BlogPostList