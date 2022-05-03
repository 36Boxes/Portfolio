import React from "react";

const CallToAction = (props) => {


    return (
        <section class="section section-lg pt-0 text-center">
            <div class="container">
                <div class="bg-gradient-warning shadow-lg border-0 card">
                    <div class="p-5">
                        <div class="align-items-center row">
                            <div class="col-lg-8">
                                <h3 class="text-white">{props.props.title}</h3>
                                <p class="lead text-white mt-3">{props.props.description}</p>
                            </div>
                            <div class="ml-lg-auto col-lg-3">
                                <a href="/contact" class="btn-white btn btn-default btn-lg btn-block">{props.props.button}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;