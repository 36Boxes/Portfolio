import React from "react";


const BannerNoSkew = (props) => {
    return (
        <div class="section section-hero section-shaped">
            <div class="shape shape-style-3 shape-default">
                <span class="span-150"></span>
                <span class="span-75"></span>
                <span class="span-50"></span>
                <span class="span-75"></span>
                <span class="span-100"></span>
                <span class="span-75"></span>
                <span class="span-50"></span>
                <span class="span-100"></span>
                <span class="span-50"></span>
                <span class="span-100"></span>
            </div>
            <div class="page-header">
                <div class="container shape-container d-flex align-items-center py-lg">
                    <div class="col px-0">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-6 text-center">
                                <h1 class="text-white display-1">{props.props.title}</h1>
                                <h4 class="display-5 font-weight-normal text-white">{props.props.subtitle}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerNoSkew;