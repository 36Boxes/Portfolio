import React from "react";
import { Col, Row } from "reactstrap";

const BlogPostHeader = (props) => {

    const slimLine = {
        height: "5px"
    }

    return (
        <div class="text-center mt-5">
            <h3>{props.props.name}</h3>
            <Row>
                <Col style={slimLine} ></Col>
                <Col className="bg-primary"></Col>
                <Col></Col>
            </Row>
        </div>
    );

}

export default BlogPostHeader