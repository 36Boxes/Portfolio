import React from "react";

const FavouriteProject = (props) => {

    const text = props.props

    return (
        <div class="col-lg-4">
            <a className="text-white mt-3" href="/projects">
            <div className="card-lift--hover">
                <img alt="..." class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary" src={`${process.env.REACT_APP_URL}` + text.href }/>
            <h5 class="text-white mt-3"><a className="text-white mt-3" href="/projects">{text.title}</a></h5>
            <p class="text-white mt-3">{text.description}</p>
            </div>
            </a>
        </div>
    );

};

export default FavouriteProject;