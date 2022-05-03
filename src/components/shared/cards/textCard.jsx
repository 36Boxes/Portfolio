import React from "react";

const TextCard = (props)=> {
    return (
        <div class="pl-md-5">
            <div class="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
            <i class="far fa-comment-alt"></i>
            </div>
            <h3>{props.props.title}</h3>
            <p class="lead">
                {props.props.subtitle}
            </p>
            <p>
                {props.props.paragraph1}
            </p>
            <p>
                {props.props.paragraph2}
            </p>
            <a class="font-weight-bold text-warning mt-5" href={`${props.props.href}`}>
                {props.props.link}
            </a>
        </div>
    );
};

export default TextCard;