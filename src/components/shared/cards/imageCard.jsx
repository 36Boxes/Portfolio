import React from "react";

const ImageCard = (props) => {

    return (
        <div class="bg-default shadow border-0 card">
            <img alt="..." src="../../assets/img/video-games-pc-gaming.jpg" class="card-img-top"/>
            <blockquote class="card-blockquote">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg-bg" preserveAspectRatio="none" viewBox="0 0 583 95">
                    <polygon class="fill-default" points="0,52 583,95 0,95"></polygon><polygon class="fill-default" opacity=".2" points="0,42 583,95 683,0 0,95"></polygon>
                </svg>
                <h4 class="display-3 font-weight-bold text-white">{props.props.title}</h4>
                <p class="lead text-italic text-white">
                    {props.props.subtitle}
                </p>
            </blockquote>
        </div>
    );

}

export default ImageCard;