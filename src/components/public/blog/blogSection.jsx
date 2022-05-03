import React from "react";
import { Col, Container, Row } from "reactstrap";
import SideBar from "./sideBar";
import BlogPostListCard from "./blogPostListCard";
import CallToAction from "../../shared/cards/callToAction";

const BlogSection = (props) => {

    return (
        <Row>
            <Col></Col>
            <Col md="10">
                <Container>
                <BlogPostListCard props={props.props.profileSection}/>
                </Container>
                <br/>
                <CallToAction props={props.props.callToAction}/>
            
            </Col>
            <Col></Col>
        </Row>
    );

}

export default BlogSection;