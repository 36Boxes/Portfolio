import React from "react";

const BulletPoint = (props) => {

    return (
        <li class="py-2">
            <div class="d-flex align-items-center">
                <div>
                    <span class="badge-circle mr-3 badge badge-success">
                        <i className={`${props.props.pic}`}></i>
                    </span>
                </div>
                <div>
                    <h6 class="mb-0">{props.props.tech}</h6>
                </div>
            </div>
        </li>
    );

}

export default BulletPoint;