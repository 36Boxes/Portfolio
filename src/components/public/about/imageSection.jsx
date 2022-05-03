import React from "react";

import { Container } from "reactstrap";
import ImageCard from "../../shared/cards/imageCard";
import TextCard from "../../shared/cards/textCard";

const ImageSection = (props) => {
    return (
        <section class="section bg-secondary">
            <Container>
                <div class="row-grid align-items-center row">
                    <div class="col-md-6">
                        <ImageCard props={props.props.image}/>
                    </div>
                    <div class="col-md-6">
                        <TextCard props={props.props.text}/>
                    </div>
                </div>
            </Container>
            <div class="separator separator-bottom separator-skew">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
    );

}

export default ImageSection