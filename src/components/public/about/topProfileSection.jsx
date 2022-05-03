import React from "react";

const TopProfileSection = () => {
     
    return (
        <div class="justify-content-center row">
            <div class="order-lg-2 col-lg-3">
                <div class="card-profile-image">
                    <img alt="..." class="rounded-circle" src="../../assets/img/36FinalLogo.png"/>
                </div>
            </div>
            <div class="order-lg-3 text-lg-right align-self-lg-center col-lg-4">
                <div class="card-profile-actions py-4 mt-lg-0">
                    <a href="#pablo" class="float-right btn btn-default btn-sm">Message Me</a>
                </div>
            </div>
            <div class="order-lg-1 col-lg-4">
                <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                        <span class="heading">About Me</span>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TopProfileSection