import React from "react";
import { Badge, Button, Col, Row } from "reactstrap";
import GithubLink from "./githubLinkButton";
import PastProjectLink from "./pastProjectLinkButton";

const PastProjectTextCard = (props) => {

    const techUsedList = props.props.tech_used.split(' ')

    const techUsed = techUsedList.map((data, id) => {
        return <Badge className="mr-1" color="info">{data}</Badge>
    })

    return (
        <div class="pl-md-5">
            <Row>
                <Col>
                    <h3>{props.props.title}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        {props.props.paragraph_one}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        {props.props.paragraph_two}
                    </p>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    {techUsed}
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <PastProjectLink props={props.props}/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <GithubLink props={props.props}/>
                </Col>
            </Row>
        </div>
    );

};


export default PastProjectTextCard