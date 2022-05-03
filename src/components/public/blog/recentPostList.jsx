import React from "react";
import { Col, Container, Row } from "reactstrap";
import RecentPost from "./recentPost";

const RecentPostList = (props) => {

    return (
        <Container className="pt-5">
            <RecentPost/>
            <RecentPost/>
            <RecentPost/>
        </Container>
    );

};

export default RecentPostList;