import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText } from "reactstrap";


const FeaturedPost = (props) => {

    return (
        <a href="/">
            <Card className="bg-primary card-lift--hover" style={{ height: "10rem" }}>
                <br/>
                <CardBody className="text-white text-center">
                    <strong>How to deploy a Django Project on Digital Ocean</strong>
                </CardBody>
            </Card>
        </a>
    );

};

export default FeaturedPost