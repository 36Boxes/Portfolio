import React from "react";

const ProfileDetails = (props) => {
    return (
        <div class="text-center mt-5">
            <h3>{props.props.name}<span class="font-weight-light">, {props.props.age}</span></h3>
            <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>{props.props.location}
            </div>
            <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>{props.props.job}
            </div>
            <div>
                <i class="ni education_hat mr-2"></i>{props.props.education}
            </div>
        </div>
    );

}

export default ProfileDetails