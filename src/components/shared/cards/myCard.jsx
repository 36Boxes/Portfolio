import React from "react";

const MyCard = (props) => {

    const prop = props.props

    const colour = props.props.colour

    return (
        <div class="card-lift--hover shadow border-0 card text-center">
            <div class="py-5 card-body">
                <div className={`icon icon-shape icon-shape-${colour} rounded-circle mb-4`}>
                    <i className={`${prop.icon}`}></i>
                </div>
                <h6 className={`text-${colour} text-uppercase`}>{prop.title}</h6>
                <p class="description mt-3">{prop.description}</p>
                <div>
                    <span className={`mr-1 badge badge-${colour} badge-pill`}>{prop.pill1}</span>
                    <span className={`mr-1 badge badge-${colour} badge-pill`}>{prop.pill2}</span>
                    <span className={`mr-1 badge badge-${colour} badge-pill`}>{prop.pill3}</span>
                </div>
                <a href={`${prop.href}`} className={`mt-4 btn btn-${colour}`}>Learn more</a>
            </div>
        </div>
    );
};

export default MyCard;