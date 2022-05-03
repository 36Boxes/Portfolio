import React from "react";


const PreContactPageCard = (props) => {

    const text = props.props

    return (
        <section class="section section-lg bg-gradient-default">
            <div class="pt-lg pb-300 container">
                <div class="text-center justify-content-center row">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">{text.title}</h2>
                        <p class="lead text-white">{text.description}</p>
                    </div>
                </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
    );
};

export default PreContactPageCard;