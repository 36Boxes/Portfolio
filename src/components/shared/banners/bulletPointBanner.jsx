import React from "react";
import BulletPoint from "../other/bulletPoint";

const BulletPointBanner = (props) => {

    return (
        <div className="position-relative text-center">
        <section className="section section-lg">
            <div className="shape shape-style-1 shape-default">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="container">
            <div className="row-grid align-items-center row">
                <div className="order-md-2 col-md-6">
                    <img alt="..." className="img-fluid floating" src="../../assets/img/webpages.png"/>
                </div>
                <div className="order-md-1 col-md-6">
                    <div className="pr-md-5">
                        <div className={`icon icon-lg icon-shape icon-shape-${props.props.colour} shadow rounded-circle mb-5`}>
                        <i className="fas fa-code-branch"></i>
                        </div>
                        <h3>{props.props.title}</h3>
                        <p>{props.props.subtitle}</p>
                        <ul className="list-unstyled mt-5">
                            <BulletPoint props={props.props.bulletPoint1}></BulletPoint>
                            <BulletPoint props={props.props.bulletPoint2}></BulletPoint>
                            <BulletPoint props={props.props.bulletPoint3}></BulletPoint>
                </ul>
            </div>
        </div>
    </div>
    </div>
            <div className="separator separator-bottom separator-skew">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
    </div>
    );

}

export default BulletPointBanner;