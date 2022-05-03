import React from "react";
import { Card, CardImg, Col, Container, Row } from "reactstrap";

const RecentPost = (props) => {

    return (
        <Row className="pt-2">
            <Card className="card-lift--hover border-0">
            <Col xs="5">
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/270"
                    width="100%"
                    object-fit="contain"
                    className="pt-2"
                    />
            </Col>
            <Col xs>
                <Container className="pt-2">
                <blockquote class="blockquote text-right">
                    <p class="">How to deploy a Django Project on Digital Ocean</p>
                    <footer class="blockquote-footer"><cite title="Source Title">08/02/1998</cite></footer>
                </blockquote>
                </Container>
            </Col>
            </Card>
    </Row>
    );

};

export default RecentPost