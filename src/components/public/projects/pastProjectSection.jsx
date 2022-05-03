import React from "react";

import { Container } from "reactstrap";
import PastProjectImageCard from "./pastProjectImageCard";
import PastProjectTextCard from "./pastProjectTextCard";


const PastProjectSection = (props) => {
    return (
        <section class="section bg-secondary">
            <Container>
                <div class="row-grid align-items-center row">
                    <div class="col-md-6">
                        <PastProjectImageCard props={props.props}/>
                    </div>
                    <div class="col-md-6">
                        <PastProjectTextCard props={props.props}/>
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

export default PastProjectSection